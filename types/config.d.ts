export interface IThemeConfig {
    layout?: "Common" | "Comprehensive" | "Vertical" | "Column"
    device?: "desktop" | "mobile"
    collapsed?: boolean
    showTabs?: boolean
    showTabsBarIcon?: boolean
    tabsBarStyle?: "smooth" | "cars" | "smart"
    showBreadcrumb?: boolean
    showBreadcrumbIcon?: boolean
    columnStyle?: "vertical" | "horizontal" | "card"
    showLoading?: boolean
    loading?: boolean
    containerHeight: number
    themeDrawer?: boolean
    formLabelAlign?: "left" | "right" // 表单 Label 对齐方式
}
