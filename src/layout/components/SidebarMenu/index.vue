<template>
    <div>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" v-model:open-keys="openKeys" theme="dark" mode="inline">
            <create-menu v-for="item in routes" :key="item.name" :router="item"></create-menu>
        </a-menu>
    </div>
</template>

<script lang="ts" setup>
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { computed, ComputedRef, onBeforeMount, ref, watch } from "vue"
import CreateMenu from "@/layout/components/SidebarMenu/CreateMenu"
import { useStore } from "vuex"
const store = useStore()
const route = useRoute()
const router = useRouter()

const routes: ComputedRef<readonly RouteRecordRaw[]> = computed(() => {
    if (store.state.theme.layout === "Comprehensive") {
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

<style lang="stylus" scoped>
.logo {
  height 32px
  background rgba(255, 255, 255, 0.3)
  margin 16px
}
</style>
