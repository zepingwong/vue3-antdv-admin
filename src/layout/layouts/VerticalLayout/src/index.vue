<template>
    <a-layout class="layout-vertical">
        <!--侧边栏-->
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <sidebar-menu></sidebar-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header
                :class="{
                    'ant-layout-header-tabs': getShowTabs
                }"
            >
                <header-content />
                <header-tabs v-if="getShowTabs" />
            </a-layout-header>
            <!--内容-->
            <a-layout-content>
                <main-content></main-content>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"
import MainContent from "@/layout/components/MainContent/index.vue"
import HeaderContent from "@/layout/components/HeaderContent/index.vue"
import SidebarMenu from "@/layout/components/SidebarMenu/index.vue"
import { useThemeSetting } from "@/hooks"
const { getShowTabs } = useThemeSetting()
import { useStore } from "vuex"
const store = useStore()
</script>

<style lang="less" scoped></style>
