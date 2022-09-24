<template>
    <div class="header-tabs">
        <a-tabs
            v-model:active-key="activeKey"
            type="editable-card"
            :tab-bar-gutter="-16"
            hide-add
            class="header-tabs-content-smooth"
            @tab-click="handleClick"
            @edit="handleDelete"
        >
            <a-tab-pane v-for="(item, index) in tabList" :key="item.name" :closable="item.affix !== true">
                <template #tab>
                    <a-dropdown :trigger="['contextmenu']">
                        <div style="display: inline-block">{{ item.title }}</div>
                        <template #overlay>
                            <a-menu @click="handleOption(item, index, $event)">
                                <a-menu-item key="current">关闭当前标签</a-menu-item>
                                <a-menu-item key="right">关闭右侧</a-menu-item>
                                <a-menu-item key="left">关闭左侧</a-menu-item>
                                <a-menu-item key="other">关闭其他</a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </template>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, ComputedRef, onBeforeMount } from "vue"
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import { ITab } from "@/types/ITab"
const store = useStore()
const route = useRoute()
const router = useRouter()
const tabList: ComputedRef<ITab[]> = computed(() => {
    return store.state.tabs
})

/**
 * 初始化Tab
 * */
const initAffixTabs = (routes: readonly RouteRecordRaw[]) => {
    routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
            addTab({
                name: route.name as string,
                fullPath: route.path as string,
                title: route.meta.title,
                affix: route.meta.affix
            })
        }
        if (route.children && route.children.length !== 0) initAffixTabs(route.children)
    })
}
/**
 * 添加tab
 */
const addTab = (tab: ITab) => {
    store.dispatch("tabs/ADD_TAB", tab)
}
onBeforeMount(() => {
    initAffixTabs(router.options.routes)
    if (route.meta.affix !== true) {
        addTab({
            name: route.name as string,
            fullPath: route.path as string,
            title: route.meta.title,
            affix: route.meta.affix as boolean
        })
    }
    activeKey.value = route.name as string
})

// 激活的tab
const activeKey = ref<string>("Home")
// tab点击跳转页面
const handleClick = (targetKey: string) => {
    if (route.fullPath !== targetKey) {
        router.push(targetKey)
    }
}
const handleOption = (tab: ITab, index: number, item: { key: string }) => {
    switch (item.key) {
        case "current": {
            store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: 1 })
            break
        }
        case "right": {
            store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: tabList.value.length - index + 1 })
            break
        }
    }
}
watch(
    () => route.fullPath,
    () => {
        activeKey.value = route.name as string
        if (!route.meta.tabHidden) {
            addTab({
                name: route.name as string,
                fullPath: route.path as string,
                title: route.meta.title,
                affix: route.meta.affix as boolean
            })
        }
    }
)
// 关闭tab
const handleDelete = (targetKey: string, action: string) => {
    if (action === "remove") {
        const index = tabList.value
            .map((item) => {
                return item.name
            })
            .indexOf(targetKey)
        store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: 1 })
        router.push({ name: tabList.value[index - 1].name })
    }
}
</script>

<style scoped lang="stylus">
.header-tabs {
  position: relative
  box-sizing: border-box
  display: flex
  align-content: center
  align-items: center
  justify-content: space-between
  background-color #FFF
  padding 0 24px
  border-top 2px solid #f6f6f6
  .header-tabs-content {
    &-smooth {
      :deep(.ant-tabs-nav) {
        margin 0
        &:before {
          border none
        }
      }
      :deep(.ant-tabs-nav-operations) {
        display none
      }
      :deep(.ant-tabs-tab) {
        height $base-tag-item-height + 2
        padding 0 20px 0 20px;
        margin-top ($base-tabs-height/2 - $base-tag-item-height/2 - 2)
        line-height $base-tag-item-height + 2
        text-align center
        border 0
        background transparent
        transition padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important
        &:hover {
          padding: 0 30px 0 30px
          color $base-color-black
          background #dee1e6
          mask url('../src/assets/tabs_images/tab.png')
          -webkit-mask url('../src/assets/tabs_images/tab.png')
          -webkit-mask-size: 100% 100%
        }
        &-active {
          padding 0 30px 0 30px
          color $base-color-blue
          background mix($base-color-white, $base-color-blue, 90%)
          mask url('../src/assets/tabs_images/tab.png')
          mask-size: 100% 100%
          -webkit-mask url('../src/assets/tabs_images/tab.png')
          -webkit-mask-size: 100% 100%
          &:hover {
            padding: 0 30px 0 30px
            color $base-color-blue
            background mix($base-color-white, $base-color-blue, 90%)
            mask url('../src/assets/tabs_images/tab.png')
            mask-size 100% 100%
            -webkit-mask url('../src/assets/tabs_images/tab.png')
            -webkit-mask-size 100% 100%
          }
        }
      }
    }
  }
}
</style>
