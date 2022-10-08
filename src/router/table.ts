import { RouteRecordRaw } from "vue-router"

const test: RouteRecordRaw[] = [
    {
        path: "/table",
        name: "Table",
        component: () => import("@/views/table/index.vue"),
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "表格",
            isCustomSvg: true,
            icon: "form-outlined",
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

export default test
