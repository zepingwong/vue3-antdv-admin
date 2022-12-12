import { ActionTree } from "vuex"
import { IUser } from "@/types/IUser"
import { IState } from "#/index"

const actions: ActionTree<IUser, IState> = {
    setToken: ({ commit }, info: string | undefined) => {
        commit("setToken", info)
    },
    setSessionTimeout: ({ commit }, flag: boolean) => {
        commit("setSessionTimeout", flag)
    },
    logout: ({ commit }) => {
        commit("logout")
    }
}

export default actions
