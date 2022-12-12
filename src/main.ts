import { createApp } from "vue"
import "./style/style.styl"
import "ant-design-vue/dist/antd.variable.min.css"
import "uno.css"
import App from "@/App.vue"
import Antd from "ant-design-vue"

import router from "@/router"
import store from "@/store"
import layout from "@/layout"

const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.use(layout)
app.mount("#app")

export default app
