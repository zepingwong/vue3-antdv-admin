import { defineComponent, PropType, Slots } from "vue"
import aIcon from "@/components/aicon/index.vue"
import { RouteRecordRaw } from "vue-router"
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
        const menuSub = (router: RouteRecordRaw) => {
            const subSlots: Slots = {
                title: () => [<span>{router.meta?.title}</span>],
                icon: () => [<aIcon type={router.meta?.icon || "FolderOutlined"} />]
            }
            return (
                <a-sub-menu v-slots={subSlots} key={router.name}>
                    {router.children && router.children.map((item) => menuCreate(item))}
                </a-sub-menu>
            )
        }

        const menuItem = (router: RouteRecordRaw) => {
            const itemSlots: Slots = {
                icon: () => (router.meta?.icon ? [<aIcon type={router.meta?.icon || ""} />] : [])
            }
            return (
                <a-menu-item v-slots={itemSlots} key={router.name}>
                    <router-link to={router.path}>{router.meta?.title}</router-link>
                </a-menu-item>
            )
        }

        const menuCreate = (router: RouteRecordRaw) => {
            if (router.children && router.children.length > 0 && !router.meta?.hidden) {
                return menuSub(router)
            } else if (!router.meta?.hidden) {
                return menuItem(router)
            }
        }

        return menuCreate(this.router as RouteRecordRaw)
    }
})
