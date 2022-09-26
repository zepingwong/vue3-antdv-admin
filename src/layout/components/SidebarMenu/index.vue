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

const route = useRoute()
const router = useRouter()

const routes: ComputedRef<readonly RouteRecordRaw[]> = computed(() => {
    return router.options.routes
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

<style scoped></style>
