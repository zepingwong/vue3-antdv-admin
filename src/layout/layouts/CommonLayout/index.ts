import type { App, Plugin } from "vue"
import _CommonLayout from "./src/index.vue"

const CommonLayout: Plugin = {
    install(app: App) {
        app.component("CommonLayout", _CommonLayout)
    }
}
export default CommonLayout
