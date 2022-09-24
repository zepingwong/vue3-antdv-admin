import { MutationTree } from "vuex"
import { IThemeConfig } from "@/types/IThemeConfig"

export const SET_THEME = "SET_THEME"
export const SET_SIDEBAR = "SET_SIDEBAR"
const mutations: MutationTree<IThemeConfig> = {
    [SET_THEME]: (state, theme: IThemeConfig) => {
        state = theme
    },
    [SET_SIDEBAR]: (state) => {
        state.collapsed = !state.collapsed
    }
}
export default mutations
