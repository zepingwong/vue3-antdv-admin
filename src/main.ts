import { createApp } from "vue"
import "./style.styl"
import App from "@/App.vue"
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import router from "@/router"
import store from "@/store"
import api from "@/api"

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.config.globalProperties.$api = api
app.mount("#app")

export default app
