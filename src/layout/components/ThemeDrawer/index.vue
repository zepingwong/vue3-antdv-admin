<template>
    <a-tooltip placement="bottom" @click="handleOpenDrawer">
        <template #title>
            <span>主题设置</span>
        </template>
        <cloud-outlined class="trigger"></cloud-outlined>
    </a-tooltip>
    <a-drawer v-model:visible="visible" title="主题配置" width="285">
        <a-form :model="theme">
            <!--<a-divider orientation="left">标签栏</a-divider>-->
            <a-form-item label="布局">
                <a-select v-model:value="theme.layout">
                    <a-select-option value="Vertical">纵向布局</a-select-option>
                    <a-select-option value="Comprehensive">综合布局</a-select-option>
                    <a-select-option value="smart">分栏布局</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="是否显示标签栏">
                <a-switch v-model:checked="theme.showTabs" />
            </a-form-item>
            <a-form-item v-if="store.state.theme.showTabs" label="标签栏风格">
                <a-select v-model:value="theme.tabsBarStyle">
                    <a-select-option value="smooth">圆滑风格</a-select-option>
                    <a-select-option value="card">卡片风格</a-select-option>
                    <a-select-option value="smart">灵动风格</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item v-if="store.state.theme.showTabs" label="标签栏是否显示图标">
                <a-switch v-model:checked="theme.showTabsBarIcon" />
            </a-form-item>
            <a-form-item label="是否显示面包屑">
                <a-switch v-model:checked="theme.showBreadcrumb" />
            </a-form-item>
            <a-form-item v-if="theme.showBreadcrumb" label="面包屑是否显示图标">
                <a-switch v-model:checked="theme.showBreadcrumbIcon" />
            </a-form-item>
        </a-form>
    </a-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import { useStore } from "vuex"
import { CloudOutlined } from "@ant-design/icons-vue"
const visible = ref<boolean>(true)
const store = useStore()
const theme = computed(() => store.state.theme)
const handleOpenDrawer = () => {
    visible.value = true
}
</script>

<style scoped lang="stylus">
:deep(.ant-form-item-control) {
  text-align right
}
:deep(.ant-select-selection-item) {
  text-align center
}
.trigger {
  line-height 64px
  padding 0 20px
}
</style>
