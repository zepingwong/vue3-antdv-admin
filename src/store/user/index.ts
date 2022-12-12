import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"
import { IUser } from "@/types/IUser"
import { Module } from "vuex"
import { IState } from "#/index"

const user: Module<IUser, IState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default user
