<template>
    <div v-if="getShowBreadcrumb" class="header-breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
                <a-dropdown v-if="item.children && item.children.length > 1">
                    <a class="header-breadcrumb__dropdown">
                        <a-icon
                            v-if="getShowBreadcrumbIcon"
                            class="header-breadcrumb__icon"
                            :custom="item.meta.isCustomSvg"
                            :type="item.meta.icon"
                        />
                        <span class="header-breadcrumb__title">{{ item.meta.title }}</span>
                        <a-icon class="header-breadcrumb__dropdown-arrow" type="down-outlined" />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item v-for="menu in item.children" :key="menu.name">
                                <a-icon
                                    v-if="getShowBreadcrumbIcon"
                                    class="header-breadcrumb__icon"
                                    :custom="menu.meta.isCustomSvg"
                                    :type="menu.meta.icon"
                                />
                                <span class="header-breadcrumb__menu-title">{{ menu.meta.title }}</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <template v-else>
                    <a-icon
                        v-if="getShowBreadcrumbIcon"
                        class="header-breadcrumb__icon"
                        :custom="item.meta.isCustomSvg"
                        :type="item.meta.icon"
                    />
                    <span class="header-breadcrumb__title">{{ item.meta.title }}</span>
                </template>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import AIcon from "@/components/aicon/index.vue"
import { useThemeSetting } from "@/hooks"
import { onMounted } from "vue"

const { getShowBreadcrumbIcon, getShowBreadcrumb } = useThemeSetting()

const route = useRoute()
onMounted(() => {
    console.log(route)
})
</script>

<style lang="less" scoped>
.header-breadcrumb {
    height: @base-top-bar-height;
    line-height: @base-top-bar-height;
    padding-left: 30px;

    .ant-breadcrumb {
        line-height: @base-top-bar-height;
        :deep(.ant-breadcrumb-link) {
            height: 14px;
        }
    }
    &__title {
        font-weight: bold;
        font-size: 14px;
        padding-left: 5px;
    }
    &__icon {
        font-weight: bold;
        font-size: 14px;
    }
    &__dropdown {
        &-arrow {
            padding-left: 10px;
        }
        &:hover {
            .header-breadcrumb__dropdown-arrow {
                transform: rotateX(180deg);
                transition: transform 1s;
            }
        }
    }
    &__menu-title {
        padding-left: 5px;
    }
}
</style>
