import type { App, Plugin } from "vue"

import CommonLayout from "@/layout/CommonLayout"
import VerticalLayout from "@/layout/VerticalLayout"
import ComprehensiveLayout from "@/layout/ComprehensiveLayout"

const layout: Plugin = {
    install(app: App) {
        CommonLayout.install?.(app)
        VerticalLayout.install?.(app)
        ComprehensiveLayout.install?.(app)
    }
}

export default layout
