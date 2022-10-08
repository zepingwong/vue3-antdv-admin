<template>
    <div>
      <sidebar-logo/>
        <a-menu
            v-model:selectedKeys="selectedKeys"
            v-model:open-keys="openKeys"
            :theme="store.state.theme.layout === 'Column' ? 'light' : 'dark'"
            mode="inline"
        >
            <create-menu v-for="item in routes" :key="item.name" :router="item"></create-menu>
        </a-menu>
    </div>
</template>

<script lang="ts" setup>
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { computed, ComputedRef, onBeforeMount, ref, watch } from "vue"
import CreateMenu from "@/layout/components/SidebarMenu/CreateMenu"
import SidebarLogo from "@/layout/components/SidebarLogo/index.vue"
import { useStore } from "vuex"
const store = useStore()
const route = useRoute()
const router = useRouter()

const routes: ComputedRef<readonly RouteRecordRaw[]> = computed(() => {
    if (store.state.theme.layout === "Comprehensive" || store.state.theme.layout === "Column") {
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
        return router.options.routes
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
