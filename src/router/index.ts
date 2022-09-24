import { createRouter, createWebHashHistory } from "vue-router"
import home from "@/router/home"
import test from "@/router/test"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...home, ...test]
})

export default router
