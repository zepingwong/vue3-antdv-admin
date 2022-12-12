import { MutationTree } from "vuex"
import { LocaleState } from "@/store/locale/state"
import { LocaleSetting } from "#/config"
import { LOCALE_KEY } from "@/enums/cacheEnum"
import { createLocalStorage } from "@/utils/cache"

const ls = createLocalStorage()
const mutations: MutationTree<LocaleState> = {
    setLocaleInfo: (state, info: Partial<LocaleSetting>) => {
        Object.assign(state, info)
        ls.set(LOCALE_KEY, state)
    }
}

export default mutations
