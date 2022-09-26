/**
 * 默认主题配置
 */
import { IThemeConfig } from "@/types/IThemeConfig"

export const defaultTheme: IThemeConfig = {
    layout: "Comprehensive",
    // 是否开启标签页
    showTabs: true,
    // 显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth
    tabsBarStyle: "smooth",
    // 是否标签页图标
    showTabsBarIcon: true,
    // 是否开启面包屑导航
    showBreadcrumb: true,
    // 是否显示面包屑导航图标
    showBreadcrumbIcon: true,
    // 分栏风格(仅针对分栏布局column时生效)：横向风格horizontal、纵向风格vertical、卡片风格card
    columnStyle: "vertical"
}
