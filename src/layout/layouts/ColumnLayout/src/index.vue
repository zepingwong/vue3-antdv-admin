<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider
            :trigger="null"
            :class="{
                fold: store.state.theme.collapsed,
                unfold: !store.state.theme.collapsed
            }"
        >
            <column-bar style="width: 64px"></column-bar>
            <sidebar-menu
                style="width: 200px; background-color: #ffffff; border-right: 1px solid #f0f0f0"
                :style="{
                    transform: store.state.theme.collapsed ? 'translateX(-264px)' : 'translateX(0)'
                }"
            ></sidebar-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header
                :style="{
                    height: store.state.theme.showTabs ? '104px' : '64px',
                    background: '#FFFFFF',
                    padding: 0,
                    'box-shadow': '0 1px 4px rgba(0, 21, 41, 0.8)'
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
import SidebarMenu from "@/layout/components/SidebarMenu/index.vue"
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"
import MainContent from "@/layout/components/MainContent/index.vue"
import HeaderContent from "@/layout/components/HeaderContent/index.vue"
import ColumnBar from "@/layout/layouts/ColumnLayout/src/ColumnBar.vue"
import { useStore } from "vuex"

const store = useStore()
</script>

<style lang="stylus" scoped>
:deep(.unfold) {
  max-width 264px !important
  min-width 264px !important
  flex 0 0 264px !important
  width 264px !important
  .ant-layout-sider-children {
    display flex
  }
}
:deep(.fold) {
  max-width 64px !important
  min-width 64px !important
  flex 0 0 64px !important
  width 64px !important
  .ant-layout-sider-children {
    display flex
  }
}
</style>
