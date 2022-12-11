import { createRouter, createWebHashHistory } from "vue-router"
import home from "@/router/home"
import test from "@/router/test"
import table from "@/router/table"
import constant from "@/router/constant"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...home, ...constant, ...table]
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
