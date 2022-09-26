import { Router } from "vue-router"

const permission = (router: Router) => {
    router.beforeEach((to, from, next) => {
        const redirect = from.query.redirect as string | undefined
        if (redirect && to.fullPath === redirect) {
            next({ ...to, replace: true })
        } else {
            next({ ...to })
        }
    })
}

export default permission
