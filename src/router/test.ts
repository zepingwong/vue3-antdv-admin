const home = [
    {
        path: "/form",
        name: "Form",
        component: () => import("@/views/form/index.vue"),
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "表单",
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

export default home
