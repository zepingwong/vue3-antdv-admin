<!--综合布局 -->
<template>
    <a-layout>
      <a-layout-sider></a-layout-sider>
    </a-layout>
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
