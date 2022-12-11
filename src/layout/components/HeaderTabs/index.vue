<template>
    <div v-if="getShowTabs" class="header-tabs">
        <a-tabs
            v-model:active-key="activeKey"
            type="editable-card"
            :tab-bar-gutter="-16"
            hide-add
            :class="`header-tabs-content-${getTabsBarStyle}`"
            @tab-click="(val) => clickTab(val)"
            @edit="(val) => deleteOneTab(val)"
        >
            <a-tab-pane v-for="(item, index) in getTabList" :key="item.name" :closable="item.affix !== true">
                <template #closeIcon>
                    <a-icon custom type="icon-close" style="font-size: 14px" />
                </template>
                <template #tab>
                    <a-dropdown :trigger="['contextmenu']">
                        <div style="display: inline-block">
                            <a-icon v-if="getShowTabsBarIcon" :custom="item.isCustomSvg" :type="item.icon" />
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
import { ref, watch, onBeforeMount } from "vue"
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import { ITab } from "#/tab"
import { useThemeSetting, useTabs } from "@/hooks"
const { getTabList, deleteOneTab, initAffixTabs, addOneTab, clickTab } = useTabs()
const { getTabsBarStyle, getShowTabs, getShowTabsBarIcon } = useThemeSetting()

const store = useStore()
const route = useRoute()
const router = useRouter()

onBeforeMount(() => {
    initAffixTabs(router.options.routes)
    // 保留当前页
    if (route.meta && route.meta?.title && route.meta.affix !== true) {
        addOneTab({
            name: route.name as string,
            fullPath: route.path as string,
            title: route.meta.title,
            affix: route.meta.affix as boolean,
            icon: route.meta.icon,
            isCustomSvg: route.meta.isCustomSvg,
            query: route.query
        })
    }
    activeKey.value = route.name as string
})

// 激活的tab
const activeKey = ref<string>("Home")

const handleOption = (tab: ITab, index: number, item: { key: string }) => {
    switch (item.key) {
        case "current": {
            store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: 1 })
            break
        }
        case "right": {
            store.dispatch("tabs/DEL_TAB", { index: index, deleteCount: getTabList.value.length - index + 1 })
            break
        }
    }
}
watch(
    () => route.fullPath,
    () => {
        activeKey.value = route.name as string
        if (!route.meta.tabHidden) {
            addOneTab({
                name: route.name as string,
                fullPath: route.path as string,
                title: route.meta.title,
                affix: route.meta.affix as boolean,
                icon: route.meta.icon,
                isCustomSvg: route.meta.isCustomSvg,
                query: route.query
            })
        }
    }
)
</script>

<style scoped lang="less">
.header-tabs {
    height: @base-tabs-height;
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 24px;
    border-top: 1px solid #f6f6f6;

    :deep(.ant-tabs-nav) {
        margin: 0;

        &:before {
            border: none;
        }
    }

    :deep(.anticon) {
        margin-right: 0;
    }

    :deep(.ant-tabs-nav-operations) {
        display: none;
    }

    :deep(.ant-tabs-tab) {
        .ant-tabs-tab-remove {
            opacity: 0;
            width: 0;
            margin-left: 0;
            margin-top: 3px;
            line-height: 20px;
            vertical-align: -0.125em;
            text-transform: none;
            padding-right: 0;
        }

        &:hover {
            .ant-tabs-tab-remove {
                width: 26px;
                opacity: 1;
                float: right;
                transition: @base-transition;
            }
        }

        &-active {
            .ant-tabs-tab-remove {
                width: 26px;
                opacity: 1;
            }
        }
    }

    .header-tabs-content {
        // 灵动
        &-smart {
            height: @base-tag-item-height;

            :deep(.ant-tabs-tab) {
                margin-left: 0 !important;
                margin-right: 5px;
                height: @base-tag-item-height;
                line-height: @base-tag-item-height;
                border: 0;
                transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

                &:after {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    content: "";
                    background-color: var(--ant-primary-color);
                    transition: @base-transition;
                }

                &:hover {
                    background-color: var(--ant-primary-color-outline);

                    &:after {
                        width: 100%;
                        transition: @base-transition;
                    }
                }
            }

            :deep(.ant-tabs-tab-active) {
                background: var(--ant-primary-color-outline);

                &:hover {
                    background: var(--ant-primary-color-outline);
                }

                &:after {
                    width: 100%;
                    transition: @base-transition;
                }
            }
        }

        // 卡片
        &-card {
            height: @base-tag-item-height;

            :deep(.ant-tabs-tab) {
                height: @base-tag-item-height;
                margin-left: 0 !important;
                margin-right: 5px;

                &:hover {
                    border-color: var(--ant-primary-color);
                    border-radius: 0;
                }

                &-active {
                    border-color: var(--ant-primary-color);
                    border-radius: 0;
                }
            }
        }

        // 圆滑风格
        &-smooth {
            :deep(.ant-tabs-tab) {
                height: @base-tag-item-height + 2;
                line-height: @base-tag-item-height + 2;
                padding: 0 25px 0 25px;
                margin-top: (@base-tabs-height - @base-tag-item-height - 3);
                text-align: center;
                border: 0;
                background: transparent;
                transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

                &:hover {
                    z-index: 1999;
                    color: var(--ant-primary-color);
                    background: #dee1e6;
                    mask: url("~@/assets/tabs_images/tab.png");
                    -webkit-mask: url("~@/assets/tabs_images/tab.png");
                    -webkit-mask-size: 100% 100%;
                }

                &-active {
                    padding: 0 30px 0 30px;
                    color: @base-color-blue;
                    background: var(--ant-primary-color-outline);
                    mask: url("~@/assets/tabs_images/tab.png");
                    mask-size: 100% 100%;
                    -webkit-mask: url("~@/assets/tabs_images/tab.png");
                    -webkit-mask-size: 100% 100%;

                    &:hover {
                        color: var(--ant-primary-color-hover);
                        background: var(--ant-primary-color-outline);
                        mask: url("~@/assets/tabs_images/tab.png");
                        mask-size: 100% 100%;
                        -webkit-mask: url("~@/assets/tabs_images/tab.png");
                        -webkit-mask-size: 100% 100%;
                    }
                }
            }
        }
    }
}
</style>
