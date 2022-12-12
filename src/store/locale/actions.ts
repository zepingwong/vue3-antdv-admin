import { ActionTree } from "vuex"
import { IState } from "#/store"
import { LocaleState } from "@/store/locale/state"
import { LocaleSetting } from "#/config"

const actions: ActionTree<LocaleState, IState> = {
    setLocaleInfo: ({ commit }, info: Partial<LocaleSetting>) => {
        commit("setLocaleInfo", info)
    }
}
export default actions
