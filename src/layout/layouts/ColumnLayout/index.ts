import type { App, Plugin } from "vue"
import _ColumnLayout from "./src/index.vue"

const ColumnLayout: Plugin = {
    install(app: App) {
        app.component("ColumnLayout", _ColumnLayout)
    }
}
export default ColumnLayout
