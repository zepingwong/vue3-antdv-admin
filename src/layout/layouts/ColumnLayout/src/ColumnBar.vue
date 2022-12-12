<template>
    <div
        :style="{
            width: getColumnStyle === 'horizontal' ? '84px' : '64px'
        }"
    >
        <sidebar-logo :small="true" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :class="`column-bar-${getColumnStyle}`">
            <a-menu-item v-for="item in parentRoute" :key="item.name">
                <router-link :to="item.path">
                    <a-icon
                        :custom="item.meta?.isCustomSvg"
                        :type="item.meta?.icon ? item.meta?.icon : ''"
                        :style="{
                            width: getColumnStyle === 'horizontal' ? 'auto' : '100%'
                        }"
                    />
                    {{ item.meta?.title }}
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts" setup>
import AIcon from "@/components/aicon/index.vue"
import { computed, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { constantRouter } from "@/router/constant"
import SidebarLogo from "@/layout/components/SidebarLogo/index.vue"
import { useThemeSetting } from "@/hooks"

const { getColumnStyle } = useThemeSetting()

const router = useRouter()
const route = useRoute()
const selectedKeys = ref(["Root"])
const parentRoute = computed(() => {
    return router.options.routes.filter((item) => {
        // 登录、404等路由不能出现在顶部菜单
        if (constantRouter.indexOf(item.path) === -1) {
            // 权限筛选
            return true
        }
    })
})
watch(
    () => route.fullPath,
    () => {
        selectedKeys.value[0] = route.matched[0].name as string
    }
)
</script>

<style lang="less" scoped>
.column-bar {
    // 横向
    &-horizontal {
        width: 84px;
        background-color: transparent;

        :deep(.ant-menu-item) {
            height: 40px;
            white-space: initial;
            padding: 0 !important;
            display: flex;
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
            line-height: 25px;

            .ant-menu-title-content {
                flex: none;
                margin: auto;
            }
        }
    }
    // 箭头
    &-arrow {
        width: 64px;
        background-color: transparent;

        :deep(.ant-menu-item) {
            height: 64px;
            white-space: initial;
            padding: 0 !important;
            display: flex;
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
            line-height: 25px;

            &-selected {
                background-color: transparent !important;
                position: relative;
                &:before {
                    content: " ";
                    position: absolute;
                    top: 50%;
                    border: 10px solid transparent;
                    transform: translateY(-50%);
                    right: 0;
                    height: 0;
                    width: 0;
                    //尖朝上，bottom。以此类推
                    border-right-color: var(--ant-primary-color);
                }
            }

            .ant-menu-title-content {
                flex: none;
                margin: auto;
            }
        }
    }
    // 卡片
    &-card {
        width: 64px;
        background-color: transparent;
        :deep(.ant-menu-item) {
            background-color: transparent;
            height: 64px;
            white-space: initial;
            padding: 0 !important;
            display: flex;
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
            line-height: 20px;
            &-selected {
                background-color: transparent !important;

                .ant-menu-title-content {
                    background-color: #1890ff;
                    border-radius: 5px;
                    width: 80%;
                    height: 80%;
                    display: flex;
                    .router-link-active {
                        margin: auto;
                    }
                }
            }
            .ant-menu-title-content {
                flex: none;
                margin: auto;
            }
        }
    }
    // 纵向
    &-vertical {
        width: 64px;
        :deep(.ant-menu-item) {
            height: 64px;
            white-space: initial;
            padding: 0 !important;
            display: flex;
            margin-bottom: 0;
            margin-top: 0;
            text-align: center;
            line-height: 25px;
            .ant-menu-title-content {
                flex: none;
                margin: auto;
            }
        }
    }

    :deep(.ant-menu-inline) {
        margin-bottom: 0 !important;
    }

    :deep(.ant-menu-sub) {
        background: transparent;
    }
}
</style>
