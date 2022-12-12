<template>
    <div class="px-8 flex">
        <div class="flex items-center justify-items-center">
            <!--侧边栏开关-->
            <header-toggle />
            <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="horizontal" class="pl-6">
                <a-menu-item v-for="item in parentRoute" :key="item.name">
                    <router-link :to="item.path">
                        <a-icon :custom="item.meta.isCustomSvg" :type="item.meta.icon" />
                        {{ item.meta.title }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </div>

        <div class="leading-60px ml-auto flex items-center justify-end">
            <!--主题设置-->
            <theme-drawer />
            <!--用户头像-->
            <user-dropdown />
        </div>
    </div>
</template>

<script lang="ts" setup>
import AIcon from "@/components/aicon/index.vue"
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import HeaderToggle from "@/layout/components/SidebarToggle/index.vue"
import { computed, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()
const selectedKeys = ref(["Root"])
const parentRoute = computed(() => {
    return router.options.routes.filter((item) => item.children)
})
watch(
    () => route.fullPath,
    () => {
        selectedKeys.value[0] = route.matched[0].name as string
    }
)
</script>

<style scoped></style>
