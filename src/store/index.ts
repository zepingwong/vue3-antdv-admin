import { createStore } from "vuex"
import user from "./user"
import theme from "./theme"
import tabs from "@/store/tabs"

export default createStore({
    modules: {
        user,
        theme,
        tabs
    }
})
