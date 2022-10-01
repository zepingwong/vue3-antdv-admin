import { createRouter, createWebHashHistory } from "vue-router"
import home from "@/router/home"
import test from "@/router/test"
import constant, { constantRouter } from "@/router/constant"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...home, ...test, ...constant]
})

router.beforeEach((to, from, next) => {
    const redirect = from.query.redirect as string | undefined
    if (redirect && to.fullPath === redirect) {
        next()
    } else {
        next()
    }
})

export default router
