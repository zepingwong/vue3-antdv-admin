// https://router.vuejs.org/zh/guide/advanced/meta.html#typescript
import "vue-router"
declare module "vue-router" {
    interface RouteMeta {
        // 是可选的
        isAdmin?: boolean
        badge?: string
        dot: boolean
        tabHidden: boolean
        dynamicNewTab: boolean
        noKeepAlive: boolean
        activeMenu: boolean
        roles: Array
        // 每个路由都必须声明
        title: string
        isCustomSvg: boolean
        icon: string
        hidden: boolean
        alwaysShow: boolean
    }
}
