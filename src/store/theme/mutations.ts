import { MutationTree } from "vuex"
import { ITheme, IThemeConfig } from "#/index"

export const SET_THEME = "SET_THEME"
export const SET_SIDEBAR = "SET_SIDEBAR"
export const SET_LOADING = "SET_LOADING"
export const SET_CONTAINER_HEIGHT = "SET_CONTAINER_HEIGHT"
export const SET_THEME_DRAWER = "SET_THEME_DRAWER"

const mutations: MutationTree<ITheme> = {
    [SET_THEME]: (state, config: IThemeConfig) => {
        Object.assign(state.config, config)
        // 保存主题设置到localStorage
        localStorage.setItem("themeConfig", JSON.stringify(state.config))
    },
    [SET_SIDEBAR]: (state, collapsed: boolean) => {
        state.collapsed = collapsed
    },
    [SET_LOADING]: (state, loading: boolean) => {
        state.loading = loading
    },
    [SET_THEME_DRAWER]: (state, open: boolean) => {
        state.themeDrawer = open
    },
    [SET_CONTAINER_HEIGHT]: (state, height: number) => {
        state.containerHeight = height
    }
}
export default mutations
