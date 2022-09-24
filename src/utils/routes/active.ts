import { RouteLocationNormalizedLoaded } from "vue-router"
import { system } from "@/config"

/**
 * 根据当前route获取激活菜单
 * @param route 当前路由
 * @param isTabsBar 是否是标签
 * @returns {string|*}
 */
export default (route: RouteLocationNormalizedLoaded, isTabsBar = false) => {
    const { meta, path, fullPath } = route
    if (system.routesWhiteList?.indexOf(path) !== -1) return path
    const rawPath = route.matched ? route.matched[route.matched.length - 1].path : path
    if (isTabsBar) return meta.dynamicNewTab ? fullPath : rawPath
    // if (meta.activeMenu) return meta.activeMenu
    return fullPath || rawPath
}
