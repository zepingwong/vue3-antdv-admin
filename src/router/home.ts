const home = [
    {
        path: "/",
        name: "Root",
        redirect: "/home",
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "首页",
            isCustomSvg: true,
            icon: "home-outlined",
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
                    icon: "home-outlined",
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
                    affix: false,
                    title: "工作台",
                    isCustomSvg: true,
                    icon: "CloudOutlined",
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
