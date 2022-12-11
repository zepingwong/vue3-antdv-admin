<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider
            :trigger="null"
            :class="{
                fold: store.state.theme.collapsed && store.state.theme.columnStyle !== 'horizontal',
                foldh: store.state.theme.collapsed && store.state.theme.columnStyle === 'horizontal',
                unfold: !store.state.theme.collapsed
            }"
        >
            <column-bar
                :style="{
                    width: store.state.theme.columnStyle === 'horizontal' ? '84px' : '64px',
                    'background-color': 'rgba(0, 0, 0, 0.85)'
                }"
            ></column-bar>
            <sidebar-menu
                style="background-color: #ffffff; border-right: 1px solid #f0f0f0"
                :style="{
                    width: store.state.theme.columnStyle === 'horizontal' ? '180px' : '200px',
                    transform: store.state.theme.collapsed ? 'translateX(-264px)' : 'translateX(0)'
                }"
            ></sidebar-menu>
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
import { useThemeSetting } from "@/hooks"
const { getShowTabs } = useThemeSetting()

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
:deep(.foldh) {
  max-width 84px !important
  min-width 84px !important
  flex 0 0 84px !important
  width 84px !important
  .ant-layout-sider-children {
    display flex
  }
}
</style>
