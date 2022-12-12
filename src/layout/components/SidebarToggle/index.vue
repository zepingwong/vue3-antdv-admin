<template>
    <div>
        <menu-unfold-outlined
            v-if="store.state.theme.collapsed"
            class="cursor-pointer font-bold text-sm transition-colors duration-300 hover:text-primary"
            @click="handleSwitchSidebar"
        />
        <menu-fold-outlined
            v-else
            class="cursor-pointer font-bold text-sm transition-colors duration-300 hover:text-primary"
            @click="handleSwitchSidebar"
        />
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

<style scoped></style>
