import { RouteRecordRaw } from "vue-router"

const test: RouteRecordRaw[] = [
    {
        path: "/table",
        name: "Table",
        redirect: "/table/index",
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "表格",
            isCustomSvg: true,
            icon: "icon-table",
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
                path: "index",
                name: "TableIndex",
                component: () => import("@/views/table/index.vue"),
                meta: {
                    hidden: false,
                    alwaysShow: false,
                    title: "表格",
                    isCustomSvg: true,
                    icon: "icon-table",
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
    }
]

export default test
