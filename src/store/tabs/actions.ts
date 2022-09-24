import { ActionTree } from "vuex"
import { IState } from "@/types/IState"
import { ITab } from "@/types/ITab"
import { ADD, DELETE } from "@/store/tabs/mutations"

const ADD_TAB = "ADD_TAB"
const DEL_TAB = "DEL_TAB"

const actions: ActionTree<Array<ITab>, IState> = {
    [ADD_TAB]: ({ commit }, tab: ITab) => {
        commit(ADD, tab)
    },
    [DEL_TAB]: ({ commit }, payload: { index: number; deleteCount: number }) => {
        commit(DELETE, payload)
    }
}
export default actions
