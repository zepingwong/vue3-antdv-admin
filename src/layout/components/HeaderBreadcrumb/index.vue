<template>
    <div v-if="getShowBreadcrumb" class="leading-60px pl-6">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
                <a-dropdown v-if="item.children && item.children.length > 1">
                    <a>
                        <a-icon
                            v-if="getShowBreadcrumbIcon"
                            class="text-sm font-bold"
                            :custom="item.meta.isCustomSvg"
                            :type="item.meta.icon"
                        />
                        <span class="font-bold text-sm pl-1">{{ item.meta.title }}</span>
                        <a-icon class="pl-1 font-bold group-hover:rotate-x-180" type="down-outlined" />
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item v-for="menu in item.children" :key="menu.name">
                                <a-icon
                                    v-if="getShowBreadcrumbIcon"
                                    class="font-bold text-sm"
                                    :custom="menu.meta.isCustomSvg"
                                    :type="menu.meta.icon"
                                />
                                <span class="pl-1 font-bold text-sm">{{ menu.meta.title }}</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <template v-else>
                    <a-icon
                        v-if="getShowBreadcrumbIcon"
                        class="text-sm font-bold"
                        :custom="item.meta.isCustomSvg"
                        :type="item.meta.icon"
                    />
                    <span class="font-bold text-sm pl-1">{{ item.meta.title }}</span>
                </template>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import AIcon from "@/components/aicon/index.vue"
import { useThemeSetting } from "@/hooks"

const { getShowBreadcrumbIcon, getShowBreadcrumb } = useThemeSetting()

const route = useRoute()
</script>

<style scoped></style>
