import Layout from "@/views/index/index.vue"

const home = {
    path: "/",
    name: "Root",
    component: Layout,
    redirect: "/home",
    hidden: false,
    alwaysShow: false,
    meta: {
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
            hidden: false,
            alwaysShow: false,
            redirect: "",
            meta: {
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
        }
    ]
}

export default home
