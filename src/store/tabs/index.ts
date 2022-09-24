import { Module } from "vuex"
import { IState } from "@/types/IState"
import { ITab } from "@/types/ITab"
import state from "@/store/tabs/state"
import actions from "@/store/tabs/actions"
import getters from "@/store/tabs/getters"
import mutations from "@/store/tabs/mutations"

const tabs: Module<Array<ITab>, IState> = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}

export default tabs
