export interface IThemeConfig {
    layout?: "Common" | "Comprehensive" | "Vertical"
    device?: "desktop" | "mobile"
    collapsed?: boolean
    showTabs?: boolean
    showTabsBarIcon?: boolean
    tabsBarStyle?: "smooth" | "cars" | "smart"
    showBreadcrumb?: boolean
    showBreadcrumbIcon?: boolean
    columnStyle?: "vertical" | "horizontal" | "card"
}
