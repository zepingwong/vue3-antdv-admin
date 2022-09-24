<!--综合布局 -->
<template>
    <div
        :class="{
            fixed: fixedHeader,
            'no-tabs-bar': !showTabs,
            'element-layout-comprehensive': true
        }"
    >
    </div>
</template>

<script lang="ts" setup>
defineProps({
    collapse: {
        type: Boolean,
        default() {
            return false
        }
    },
    fixedHeader: {
        type: Boolean,
        default() {
            return true
        }
    },
    showTabs: {
        type: Boolean,
        default() {
            return true
        }
    },
    device: {
        type: String,
        default() {
            return "desktop"
        }
    }
})
</script>

<style scoped lang="stylus"></style>
