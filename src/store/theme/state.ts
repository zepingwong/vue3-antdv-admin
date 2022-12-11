import { ITheme } from "#/index"

const get = () => {
    const str = localStorage.getItem("themeConfig")
    if (str) {
        return {
            config: JSON.parse(str),
            device: "desktop",
            collapsed: false,
            loading: false,
            containerHeight: 0
        } as ITheme
    } else {
        return {
            config: {
                layout: "Comprehensive",
                showTabsBarIcon: true,
                showTabs: true,
                showBreadcrumb: true,
                tabsBarStyle: "smooth",
                showBreadcrumbIcon: true,
                formLabelAlign: "left",
                columnStyle: "card"
            },
            device: "desktop",
            collapsed: false,
            loading: false,
            containerHeight: 0
        } as ITheme
    }
}
const state: ITheme = get()

export default state
