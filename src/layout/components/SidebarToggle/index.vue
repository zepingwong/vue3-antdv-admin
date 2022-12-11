<template>
    <div>
        <menu-unfold-outlined v-if="store.state.theme.collapsed" class="trigger" @click="handleSwitchSidebar" />
        <menu-fold-outlined v-else class="trigger" @click="handleSwitchSidebar" />
    </div>
</template>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue"
import { useStore } from "vuex"
const store = useStore()
const handleSwitchSidebar = () => {
    store.dispatch("theme/SWITCH_SIDEBAR")
}
</script>

<style lang="less" scoped>
.trigger {
    font-size: 14px;
    line-height: 56px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: var(--ant-primary-color);
    }
}
</style>
