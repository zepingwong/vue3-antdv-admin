import { createApp } from "vue"
import "./style/style.styl"

import App from "@/App.vue"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import router from "@/router"
import store from "@/store"
import api from "@/api"
import layout from "@/layout"
import mitt from "mitt"

const Mit = mitt()
// TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.use(layout)
app.config.globalProperties.$api = api
//挂载事务总线
app.config.globalProperties.$Bus = Mit
app.mount("#app")

export default app
