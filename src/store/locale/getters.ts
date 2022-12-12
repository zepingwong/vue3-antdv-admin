import { GetterTree } from "vuex"
import { LocaleState } from "@/store/locale/state"
import { IState } from "#/store"

const getters: GetterTree<LocaleState, IState> = {
    getLocale: (state) => {
        return state?.localInfo.locale ?? "zh_CN"
    }
}
export default getters
