<template>
    <div class="flex px-8">
        <div class="flex-center">
            <!--侧边栏开关-->
            <header-toggle />
            <!--面包屑导航-->
            <header-breadcrumb />
        </div>
        <div class="flex-center ml-auto">
            <!--主题设置-->
            <theme-drawer />
            <!--用户头像-->
            <user-dropdown />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import HeaderToggle from "@/layout/components/SidebarToggle/index.vue"
import HeaderBreadcrumb from "@/layout/components/HeaderBreadcrumb/index.vue"
</script>

<style scoped></style>
