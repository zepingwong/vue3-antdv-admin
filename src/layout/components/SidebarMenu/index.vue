<template>
    <div>
        <sidebar-logo />
        <a-menu
            v-model:selectedKeys="selectedKeys"
            v-model:open-keys="openKeys"
            :theme="getLayout === 'Column' ? 'light' : 'dark'"
            mode="inline"
        >
            <create-menu v-for="item in routes" :key="item.name" :router="item"></create-menu>
        </a-menu>
    </div>
</template>

<script lang="ts" setup>
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { computed, ComputedRef, onBeforeMount, ref, watch } from "vue"
import { constantRouter } from "@/router/constant"
import CreateMenu from "@/layout/components/SidebarMenu/CreateMenu"
import SidebarLogo from "@/layout/components/SidebarLogo/index.vue"

import { useThemeSetting } from "@/hooks"
const { getLayout } = useThemeSetting()

const route = useRoute()
const router = useRouter()

const routes: ComputedRef<readonly RouteRecordRaw[]> = computed(() => {
    // Comprehensive 和 Column 布局下,侧边栏为子路由
    if (["Comprehensive", "Column"].includes(getLayout.value)) {
        if (route.matched.length === 0) return []
        const index: number = router.options.routes
            .map((item) => {
                return item.name
            })
            .indexOf(route.matched[0].name as string)
        if (index !== -1) {
            const tmp: RouteRecordRaw = router.options.routes[index]
            return tmp.children ? tmp.children : []
        } else {
            return []
        }
    } else {
        return router.options.routes.filter((item) => {
            // 登录、404等路由不能出现在侧边栏
            if (constantRouter.indexOf(item.path) === -1) {
                // 一级路由权限筛选
                return true
            }
        })
    }
})

const selectedKeys = ref(["Home"])
const openKeys = ref(["Root"])

onBeforeMount(() => {
    selectedKeys.value[0] = route.name as string
})
watch(
    () => route.path,
    () => {
        selectedKeys.value[0] = route.name as string
    }
)
</script>
