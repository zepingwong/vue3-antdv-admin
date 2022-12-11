import { RouteRecordRaw } from "vue-router"
// 基础路由
const constant: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login/index.vue"),
        meta: {
            hidden: false,
            alwaysShow: false,
            title: "登陆页",
            isCustomSvg: true,
            icon: "Home-outlined",
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

export default constant

export const constantRouter = ["/login"]
