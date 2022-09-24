import type { App, Plugin } from "vue"
import _VerticalLayout from "./src/index.vue"

const VerticalLayout: Plugin = {
    install(app: App) {
        app.component("VerticalLayout", _VerticalLayout)
    }
}
export default VerticalLayout
