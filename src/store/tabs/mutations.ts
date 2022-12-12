import { MutationTree } from "vuex"
import { ITab } from "#/tab"
import constant from "@/router/constant"
export const ADD = "ADD"
export const DELETE = "DELETE"
const mutations: MutationTree<Array<ITab>> = {
    /**
     * 添加Tab
     * @param state
     * @param tab
     */
    [ADD]: (state: Array<ITab>, tab: ITab) => {
        let flag = true
        // 防止固定路由
        for (let i = 0; i < constant.length; i++) {
            flag = constant[i].name !== tab.name
            if (!flag) break
        }
        // 防止重复添加
        for (let i = 0; i < state.length; i++) {
            flag = state[i].name !== tab.name
            if (!flag) break
        }
        if (flag) state.push(tab)
    },
    /**
     * 删除Tab
     * @param state
     * @param tab
     */
    [DELETE]: (state: Array<ITab>, item: { index: number; deleteCount: number }) => {
        state.splice(item.index, item.deleteCount)
    }
}

export default mutations
