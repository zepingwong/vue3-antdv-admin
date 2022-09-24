import { createStore } from "vuex"
import config from "./config"
import user from "./user"
import theme from "./theme"

export default createStore({
    modules: {
        config,
        user,
        theme
    }
})
