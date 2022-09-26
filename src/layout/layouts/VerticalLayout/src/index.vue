<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <sidebar-menu></sidebar-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header
                style="background: #fff; padding: 0"
                :style="{
                    height: store.state.theme.showTabs ? '104px' : '64px'
                }"
            >
                <header-content></header-content>
                <header-tabs v-if="store.state.theme.showTabs"></header-tabs>
            </a-layout-header>
            <!--内容-->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
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

import { useStore } from "vuex"
const store = useStore()
</script>

<style lang="stylus" scoped></style>
