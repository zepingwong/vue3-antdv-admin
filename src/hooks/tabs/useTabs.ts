import { computed } from "vue"
import store from "@/store"
import { ITab } from "#/tab"
import router from "@/router"
import { RouteRecordRaw, useRoute } from "vue-router"

export const useTabs = () => {
    const route = useRoute()
    const getTabList = computed<ITab[]>(() => store.state.tabs)
    /**
     * 删除一个标签
     * @param targetKey router.name
     */
    const deleteOneTab = (targetKey: string) => {
        const index = getTabList.value
            .map((item) => {
                return item.name
            })
            .indexOf(targetKey)
        store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: 1 }).then()
        router.push({ name: getTabList.value[index - 1].name }).then()
    }
    /**
     * 增加一个tab
     * @param tab
     */
    const addOneTab = (tab: ITab) => {
        store.dispatch("tabs/ADD_TAB", tab).then()
    }
    /**
     * 初始化固定的Tab标签
     * @param routes
     */
    const initAffixTabs = (routes: readonly RouteRecordRaw[]) => {
        routes.forEach((route) => {
            if (route.meta && route.meta?.title && route.meta.affix) {
                addOneTab({
                    name: route.name as string,
                    fullPath: route.path as string,
                    title: route.meta.title,
                    affix: route.meta.affix,
                    icon: route.meta.icon,
                    isCustomSvg: route.meta.isCustomSvg,
                    query: null!
                })
            }
            if (route.children && route.children.length !== 0) initAffixTabs(route.children)
        })
    }

    /**
     * tab点击跳转页面
     * @param targetKey
     */
    const clickTab = (targetKey: string) => {
        const targetRoute = getTabList.value.filter((item) => item.name === targetKey)
        if (route.name !== targetKey) {
            router.push({ name: targetKey, query: targetRoute.length > 0 ? targetRoute[0].query : undefined }).then()
        }
    }

    return {
        clickTab, // tab点击跳转页面
        getTabList, // 获取tab列表
        deleteOneTab, // 关闭一个tab
        initAffixTabs, // 初始化固定的Tab标签
        addOneTab // 添加一个tab
    }
}
