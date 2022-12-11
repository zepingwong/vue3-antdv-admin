import { defineComponent, PropType, Slots } from "vue"
import aIcon from "@/components/aicon/index.vue"
import { RouteRecordRaw } from "vue-router"
import { useRoute } from "vue-router"
import { useThemeSetting } from "@/hooks"

export default defineComponent({
    components: {
        aIcon
    },
    props: {
        router: {
            type: Object as PropType<RouteRecordRaw>,
            required: true
        }
    },
    render() {
        const route = useRoute()
        const { getLayout } = useThemeSetting()
        const menuSub = (router: RouteRecordRaw) => {
            const subSlots: Slots = {
                title: () => [<span>{router.meta?.title}</span>],
                icon: () => [<aIcon custom={router.meta?.isCustomSvg} type={router.meta?.icon || "FolderOutlined"} />]
            }
            return (
                <a-sub-menu v-slots={subSlots} key={router.name}>
                    {router.children &&
                        router.children.map((item) =>
                            menuCreate({
                                ...item,
                                path: router.path === "/" ? item.path : router.path + "/" + item.path
                            })
                        )}
                </a-sub-menu>
            )
        }

        const menuItem = (router: RouteRecordRaw) => {
            const itemSlots: Slots = {
                icon: () =>
                    router.meta?.icon
                        ? [<aIcon custom={router.meta?.isCustomSvg} type={router.meta?.icon || ""} />]
                        : []
            }
            return (
                <a-menu-item v-slots={itemSlots} key={router.name}>
                    <router-link
                        to={
                            getLayout.value === "Vertical"
                                ? router.path.indexOf("/") !== 0
                                    ? "/" + router.path
                                    : router.path
                                : route.matched[0].path === "/"
                                ? route.matched[0].path + router.path
                                : route.matched[0].path + "/" + router.path
                        }
                    >
                        {router.meta?.title}
                    </router-link>
                </a-menu-item>
            )
        }

        const menuCreate = (router: RouteRecordRaw) => {
            if (router.children && router.children.length > 1 && !router.meta?.menuHidden) {
                return menuSub(router)
            } else if (router.children && router.children.length === 1 && !router.meta?.menuHidden) {
                // 只有一个子路由的时候, 只显示一个child
                return menuItem({
                    ...router.children[0],
                    path: router.path + "/" + router.children[0].path
                })
            } else if (!router.meta?.hidden && !router.meta?.menuHidden) {
                return menuItem(router)
            }
        }

        return menuCreate(this.router as RouteRecordRaw)
    }
})
