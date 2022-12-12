import axios, { AxiosRequestConfig } from "axios"
import store from "@/store"
import { message, Spin } from "ant-design-vue"
import { h } from "vue"
import { net } from "@/config"
import router from "@/router"

const env = import.meta.env
const { statusName, successCode, messageName } = net

//使用create方法创建axios实例
const instance = axios.create({
    timeout: 5000, // 请求超时时间
    baseURL: env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }
})

/**
 * @description 添加请求拦截器
 */
instance.interceptors.request.use((config) => {
    Spin.setDefaultIndicator({
        indicator: h("body", { class: "anticon anticon-loading anticon-spin ant-spin-dot" })
    })
    if (config.url !== "/admin/Login") {
        if (config.headers) {
            config.headers["access-token"] = store.state.user.token
        }
    }
    return config
})

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
    (response) => handleData(response),
    (error) => {
        const { response } = error
        if (response === undefined) {
            message.error("未可知错误，大部分是由于后端不支持跨域CORS或无效配置引起").then(() => {
                console.log(error)
            })
        } else {
            return handleData(response)
        }
    }
)

const handleData = async ({
    config,
    data,
    status,
    statusText
}: {
    config: AxiosRequestConfig
    status: number
    statusText: string
    data: any
}) => {
    // 极个别情况，若将错误code设置为0时，防止识别成false影响判断
    if (data[statusName] === 0) data[statusName] = "0"
    // 若data.code存在，覆盖默认code
    let code = data && data[statusName] ? data[statusName] : status
    // 若code属于操作正常code，则status修改为200
    if (successCode.includes(code)) code = 200
    const msg = data && data[messageName] ? data[messageName] : ""
    switch (code) {
        case 200: {
            if (msg) {
                console.log(msg)
            }
            return data
        }
        case 401: {
            await router.push({ path: "/Login", replace: true })
            break
        }
    }
    // 异常处理
    // 若data.message存在，覆盖默认提醒消息
    message.error(`${config.url} 后端接口 ${code} 异常`)
}

export default instance
