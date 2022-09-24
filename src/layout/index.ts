import type { App, Plugin } from "vue"

import CommonLayout from "@/layout/CommonLayout"

const layout: Plugin = {
    install(app: App) {
        CommonLayout.install?.(app)
    }
}

export default layout
