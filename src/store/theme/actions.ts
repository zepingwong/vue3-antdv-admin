import { ActionTree } from "vuex"
import { IThemeConfig } from "@/types/IThemeConfig"
import { IState } from "@/types/IState"
import { SET_SIDEBAR } from "@/store/theme/mutations"

const SWITCH_SIDEBAR = "SWITCH_SIDEBAR"
const actions: ActionTree<IThemeConfig, IState> = {
    [SWITCH_SIDEBAR]: ({ commit }) => {
        commit(SET_SIDEBAR)
    }
}

export default actions
