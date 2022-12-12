import { createStore } from "vuex"
import user from "./user"
import theme from "./theme"
import tabs from "@/store/tabs"
import locale from "@/store/locale"

export default createStore({
    modules: {
        user,
        theme,
        tabs,
        locale
    }
})
