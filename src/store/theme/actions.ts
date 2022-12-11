import { ActionTree } from "vuex"
import { ITheme, IState, IThemeConfig } from "#/index"

export const SET_THEME = "SET_THEME"
export const SET_SIDEBAR = "SET_SIDEBAR"

const actions: ActionTree<ITheme, IState> = {
    [SET_SIDEBAR]: ({ commit }, open: boolean) => {
        commit(SET_SIDEBAR, open)
    },
    [SET_THEME]: ({ commit }, config: IThemeConfig) => {
        commit(SET_THEME, config)
    }
}

export default actions
