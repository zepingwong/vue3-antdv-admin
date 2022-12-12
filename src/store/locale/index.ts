import state, { LocaleState } from "@/store/locale/state"
import actions from "@/store/locale/actions"
import mutations from "@/store/locale/mutations"
import { Module } from "vuex"
import { IState } from "#/store"
import getters from "@/store/locale/getters"

const locale: Module<LocaleState, IState> = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}

export default locale
