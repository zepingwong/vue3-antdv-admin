import type { App, Plugin } from "vue"

import CommonLayout from "@/layout/layouts/CommonLayout"
import VerticalLayout from "@/layout/layouts/VerticalLayout"
import ComprehensiveLayout from "@/layout/layouts/ComprehensiveLayout"
import ColumnLayout from "@/layout/layouts/ColumnLayout"

const layout: Plugin = {
    install(app: App) {
        CommonLayout.install?.(app)
        VerticalLayout.install?.(app)
        ComprehensiveLayout.install?.(app)
        ColumnLayout.install?.(app)
    }
}

export default layout
