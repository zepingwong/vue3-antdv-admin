import { LocaleSetting } from "#/config"
import { createLocalStorage } from "@/utils/cache"
import { LOCALE_KEY } from "@/enums/cacheEnum"
import { localeSetting } from "@/settings/localeSetting"
export interface LocaleState {
    localInfo: LocaleSetting
}
const ls = createLocalStorage()

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting
const state: LocaleState = {
    localInfo: lsLocaleSetting
}
export default state
