import { Module } from "vuex"
import { ITheme } from "#/index"
import { IState } from "@/types/IState"

import getters from "./getters"
import mutations from "./mutations"
import state from "./state"
import actions from "./actions"

const theme: Module<ITheme, IState> = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
export default theme
