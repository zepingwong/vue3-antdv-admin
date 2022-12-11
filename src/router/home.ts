import { RouteRecordRaw } from "vue-router"

const home: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Root",
        redirect: "/home",
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "首页",
            isCustomSvg: false,
            icon: "Home-outlined",
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
                component: () => import("@/views/Home/home.vue"),
                redirect: "",
                meta: {
                    alwaysShow: false,
                    hidden: false,
                    affix: true,
                    title: "首页",
                    isCustomSvg: false,
                    icon: "Home-outlined",
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
                component: () => import("@/views/Home/workbench.vue"),
                redirect: "",
                meta: {
                    alwaysShow: false,
                    hidden: false,
                    affix: false,
                    title: "工作台",
                    isCustomSvg: true,
                    icon: "icon-workbench",
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

export default home
