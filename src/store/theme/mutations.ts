import { MutationTree } from "vuex"
import { IThemeConfig } from "@/types/IThemeConfig"

export const SET_THEME = "SET_THEME"

const mutations: MutationTree<IThemeConfig> = {
    [SET_THEME]: (state, theme: IThemeConfig) => {
        state = theme
    }
}
export default mutations
