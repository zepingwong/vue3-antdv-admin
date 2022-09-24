<template>
    <a-tabs
        v-model:active-key="activeKey"
        type="editable-card"
        :tab-bar-gutter="6"
        hide-add
        @tab-click="handleClick"
        @edit="handleDelete"
    >
        <a-tab-pane v-for="(item, index) in tabList" :key="index" :closable="item.affix !== true">
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
        if (route.meta && route.meta.affix) addTabs(route)
        if (route.children && route.children.length !== 0) initAffixTabs(route.children)
    })
}
/**
 * 添加tab
 */
const addTabs = (route: RouteRecordRaw) => {
    store.dispatch("tabs/ADD_TAB", {
        name: route.name,
        title: route.meta ? route.meta.title : "",
        fullPath: route.path,
        affix: route.meta ? route.meta.affix : false
    } as ITab)
}
onBeforeMount(() => {
    initAffixTabs(router.options.routes)
})

// 激活的tab
const activeKey = ref<string>()
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
        if (!route.meta.tabHidden) {
            store.dispatch("tabs/ADD_TAB", {
                name: route.name,
                title: route.meta.title,
                fullPath: route.fullPath
            } as ITab)
        }
    }
)
// 关闭tab
const handleDelete = (targetKey: string, action: string) => {
    if (action === "remove") {
        store.commit("")
    }
}
</script>

<style scoped></style>
