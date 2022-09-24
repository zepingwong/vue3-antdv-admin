import type { App, Plugin } from "vue"
import _ComprehensiveLayout from "./src/index.vue"

const ComprehensiveLayout: Plugin = {
    install(app: App) {
        app.component("ComprehensiveLayout", _ComprehensiveLayout)
    }
}
export default ComprehensiveLayout
