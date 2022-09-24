import { createRouter, createWebHashHistory } from "vue-router"
import home from "@/router/home"
const router = createRouter({
    history: createWebHashHistory(),
    routes: home
})

export default router
