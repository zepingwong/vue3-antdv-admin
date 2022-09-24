import { system } from "@/config"

/**
 * 获取当前跳转登录页的Route
 * @param currentPath 当前页面地址
 */
export default (currentPath: string) => {
    if (system.recordRoute && currentPath !== "/") {
        return {
            path: "/login",
            query: { redirect: currentPath },
            replace: true
        }
    } else {
        return { path: "/login", replace: true }
    }
}
