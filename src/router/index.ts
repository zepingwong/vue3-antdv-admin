import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/views/index/index.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Root",
            component: Layout,
            redirect: "/home",
            meta: {
                hidden: false,
                alwaysShow: false,
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
            },
            children: [
                {
                    path: "home",
                    name: "Home",
                    component: () => import("@/views/home/home.vue"),
                    redirect: "",
                    meta: {
                        alwaysShow: false,
                        hidden: false,
                        affix: true,
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
                    },
                    children: []
                },
                {
                    path: "workbench",
                    name: "Workbench",
                    component: () => import("@/views/home/workbench.vue"),
                    redirect: "",
                    meta: {
                        alwaysShow: false,
                        hidden: false,
                        affix: true,
                        title: "工作台",
                        isCustomSvg: true,
                        icon: "home",
                        roles: [],
                        badge: "",
                        dot: false,
                        tabHidden: false,
                        dynamicNewTab: false,
                        noKeepAlive: false,
                        activeMenu: false
                    },
                    children: []
                }
            ]
        }
    ]
})

export default router
