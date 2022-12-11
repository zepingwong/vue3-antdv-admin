import { computed } from "vue"
import store from "@/store"
import { SET_THEME_DRAWER } from "@/store/theme/mutations"
import { SET_THEME } from "@/store/theme/actions"
import { themeSettings } from "../../../configs/theme"
import { ILayout, ITabsBarStyle, IThemeName } from "#/config"
import { ConfigProvider } from "ant-design-vue"
import { green, red, blue } from "../../../configs/theme"

export const useThemeSetting = () => {
    // 主题
    const getTheme = computed<IThemeName>(() => store.state.theme.config.theme)
    const switchTheme = (themeName: IThemeName) => {
        switch (themeName) {
            case "blue": {
                ConfigProvider.config({
                    theme: blue.color
                })
                break
            }
            case "green": {
                ConfigProvider.config({
                    theme: green.color
                })
                break
            }
            case "red": {
                ConfigProvider.config({
                    theme: red.color
                })
                break
            }
        }
        store.dispatch("theme/" + SET_THEME, { theme: themeName }).then()
    }
    // 布局
    const getLayout = computed<ILayout>(() => store.state.theme.config.layout || themeSettings.layout)
    const switchLayout = (layout: ILayout) => {
        store.dispatch("theme/" + SET_THEME, { layout }).then()
    }
    // 标签栏
    const getShowTabs = computed<boolean>(() => store.state.theme.config.showTabs)
    const getTabsBarStyle = computed<ITabsBarStyle>(() => store.state.theme.config.tabsBarStyle)
    const getShowTabsBarIcon = computed<string>(() => store.state.theme.config.showTabsBarIcon)
    const switchShowTabs = () => {
        const showTabs = !getShowTabs.value
        store.dispatch("theme/" + SET_THEME, { showTabs }).then()
    }
    const switchTabsBarStyle = (tabsBarStyle: ITabsBarStyle) => {
        store.dispatch("theme/" + SET_THEME, { tabsBarStyle }).then()
    }
    const switchShowTabsBarIcon = () => {
        const showTabsBarIcon = !getShowTabsBarIcon.value
        store.dispatch("theme/" + SET_THEME, { showTabsBarIcon }).then()
    }
    // 面包屑
    const getShowBreadcrumb = computed(
        () => store.state.theme.config.showBreadcrumb && ["Column", "Vertical"].includes(getLayout.value)
    )
    const getShowBreadcrumbIcon = computed(
        () => store.state.theme.config.showBreadcrumbIcon && ["Column", "Vertical"].includes(getLayout.value)
    )
    const switchShowBreadcrumb = () => {
        const showBreadcrumb = !getShowBreadcrumb.value
        store.dispatch("theme/" + SET_THEME, { showBreadcrumb }).then()
    }
    const switchShowBreadcrumbIcon = () => {
        const showBreadcrumbIcon = !getShowBreadcrumbIcon.value
        store.dispatch("theme/" + SET_THEME, { showBreadcrumbIcon }).then()
    }

    // 主题设置抽屉
    const getThemeDrawerStatus = computed<boolean>(() => store.state.theme.themeDrawer)
    const switchThemeDrawerStatus = () => {
        store.commit("theme/" + SET_THEME_DRAWER, !getThemeDrawerStatus.value)
    }
    // 分栏
    const getColumnStyle = computed(() => store.state.theme.config.columnStyle)
    const switchColumnStyle = (columnStyle: string) => {
        store.dispatch("theme/" + SET_THEME, { columnStyle }).then()
    }
    return {
        getTheme, // 当前主题
        switchTheme, // 切换主题
        getShowTabs, // 是否显示标签栏
        getShowTabsBarIcon, // 标签栏是否显示图标
        switchShowTabs, // 设置是否显示标签栏
        getTabsBarStyle, // 标签栏风格
        switchTabsBarStyle, // 切换标签栏风格
        switchShowTabsBarIcon, // 切换标签栏是否显示图标
        getShowBreadcrumbIcon, // 面包屑是否显示图标
        switchShowBreadcrumbIcon, // 切换面包屑是否显示图标
        getShowBreadcrumb, // 是否显示面包屑
        switchShowBreadcrumb, // 切换是否显示面包屑
        getLayout, // 获取当前布局
        switchLayout, // 切换布局
        getThemeDrawerStatus, // 获取主题设置抽屉状态
        switchThemeDrawerStatus, // 切换主题设置抽屉状态
        getColumnStyle, // 获取当前分栏风格
        switchColumnStyle // 切换分栏风格
    }
}
