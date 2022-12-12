<!--综合布局 -->
<template>
    <a-layout class="h-full">
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <sidebar-menu />
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header
                class="p-0 bg-white"
                :class="{
                    '!h-114px': getShowTabs,
                    '!h-64px': !getShowTabs
                }"
            >
                <header-nav />
                <header-tabs />
            </a-layout-header>
            <!--内容-->
            <a-layout-content class="mx-6 my-5 p-6 bg-white">
                <main-content />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import HeaderNav from "@/layout/layouts/ComprehensiveLayout/src/HeaderNav.vue"
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"
import SidebarMenu from "@/layout/components/SidebarMenu/index.vue"
import MainContent from "@/layout/components/MainContent/index.vue"
import { useThemeSetting } from "@/hooks"
import { useStore } from "vuex"
const { getShowTabs } = useThemeSetting()

const store = useStore()
</script>

<style scoped></style>
