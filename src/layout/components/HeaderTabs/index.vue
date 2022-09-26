<template>
    <div class="header-tabs">
        <a-tabs
            v-model:active-key="activeKey"
            type="editable-card"
            :tab-bar-gutter="-16"
            hide-add
            :class="`header-tabs-content-${store.state.theme.tabsBarStyle}`"
            @tab-click="handleClick"
            @edit="handleDelete"
        >
            <a-tab-pane v-for="(item, index) in tabList" :key="item.name" :closable="item.affix !== true">
                <template #tab>
                    <a-dropdown :trigger="['contextmenu']">
                        <div style="display: inline-block">
                            <a-icon v-if="store.state.theme.showTabsBarIcon" :type="item.icon"></a-icon>
                            {{ item.title }}
                        </div>
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
import AIcon from "@/components/aicon/index.vue"
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
        if (route.meta && route.meta?.title && route.meta.affix) {
            addTab({
                name: route.name as string,
                fullPath: route.path as string,
                title: route.meta.title,
                affix: route.meta.affix,
                icon: route.meta.icon
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
    if (route.meta && route.meta?.title && route.meta.affix !== true) {
        addTab({
            name: route.name as string,
            fullPath: route.path as string,
            title: route.meta.title,
            affix: route.meta.affix as boolean,
            icon: route.meta.icon
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
                affix: route.meta.affix as boolean,
                icon: route.meta.icon
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
  height 44px
  position: relative
  box-sizing: border-box
  display: flex
  align-content: center
  align-items: center
  justify-content: space-between
  background-color #FFF
  padding 0 24px
  border-top 2px solid #f6f6f6
  :deep(.ant-tabs-nav) {
    margin 0
    &:before {
      border none
    }
  }
  :deep(.anticon) {
    margin-right 0
  }
  :deep(.ant-tabs-nav-operations) {
    display none
  }
  .header-tabs-content {
    &-smart {
      height: $base-tag-item-height;
      :deep(.ant-tabs-tab) {
        .ant-tabs-tab-remove {
          display none
          opacity 0
        }
        margin-left 0 !important
        margin-right 5px
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
        border: 0;
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          content: '';
          background-color: $base-color-blue;
          transition: $base-transition;
        }
        &:hover {
          .ant-tabs-tab-remove {
            display unset
            opacity 1
            transition: $base-transition;
          }
          background: mix($base-color-white, $base-color-blue, 90%);
          &:after {
            width: 100%;
            transition: $base-transition;
          }
        }
      }
      :deep(.ant-tabs-tab-active) {
        .ant-tabs-tab-remove {
          display unset
          opacity 1
        }
        background: mix($base-color-white, $base-color-blue, 90%);
        &:after {
          width: 100%;
          transition: $base-transition;
        }
      }
    }
    &-card {

      height $base-tag-item-height
      :deep(.ant-tabs-tab) {
        .ant-tabs-tab-remove {
          display none
          opacity 0
        }
        height $base-tag-item-height
        margin-left 0 !important
        margin-right 5px
        &:hover {
          .ant-tabs-tab-remove {
            display unset
            opacity 1
            transition: $base-transition;
          }
        }
        &-active {
          .ant-tabs-tab-remove {
            display unset
            opacity 1
          }
          border-color #1890ff
          border-radius 0
        }
      }
    }
    &-smooth {
      :deep(.ant-tabs-tab) {
        .ant-tabs-tab-remove {
          display none
          opacity 0
        }
        height $base-tag-item-height + 2
        padding 0 20px 0 20px;
        margin-top ($base-tabs-height/2 - $base-tag-item-height/2 - 2)
        line-height $base-tag-item-height + 2
        text-align center
        border 0
        background transparent
        transition padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important
        &:hover {
          .ant-tabs-tab-remove {
            display unset
            opacity 1
            transition: $base-transition;
          }
          padding: 0 30px 0 30px
          color $base-color-black
          background #dee1e6
          mask url('../src/assets/tabs_images/tab.png')
          -webkit-mask url('../src/assets/tabs_images/tab.png')
          -webkit-mask-size: 100% 100%
        }
        &-active {
          .ant-tabs-tab-remove {
            display unset
            opacity 1
          }
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
