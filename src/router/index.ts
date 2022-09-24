import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/view/index/index.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Root",
            component: Layout,
            meta: {
                alwaysShow: false,
                hidden: false,
                title: "首页",
                isCustomSvg: true,
                icon: "home",
                roles: [],
                badge: "",
                dot: false,
                tabHidden: false,
                dynamicNewTab: false,
                noKeepAlive: false,
                activeMenu: false
            }
        }
    ]
})

export default router
