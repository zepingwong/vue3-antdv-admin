export type ITabsBarStyle = "smooth" | "card" | "smart"
export type ILayout = "Common" | "Comprehensive" | "Vertical" | "Column"
export interface IThemeConfig {
    layout?: ILayout
    showTabs?: boolean
    tabsBarStyle?: ITabsBarStyle
    showTabsBarIcon?: boolean
    showBreadcrumb?: boolean
    showBreadcrumbIcon?: boolean
    columnStyle?: "vertical" | "horizontal" | "card"
    formLabelAlign?: "left" | "right" // 表单 Label 对齐方式
}
export interface ITheme {
    config: IThemeConfig
    device?: "desktop" | "mobile"
    collapsed?: boolean
    showLoading?: boolean
    loading?: boolean
    containerHeight: number
    themeDrawer?: boolean
}
