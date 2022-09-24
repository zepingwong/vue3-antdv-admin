<template>
    <a-tabs
        v-model:active-key="activeKey"
        type="editable-card"
        :tab-bar-gutter="6"
        @tab-click="handleClick"
        @edit="handleDelete"
    >
    </a-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const route = useRoute()
const router = useRouter()
// 激活的tab
const activeKey = ref<string>()
// tab点击跳转页面
const handleClick = (targetKey: string) => {
    if (route.fullPath !== targetKey) {
        router.push(targetKey)
    }
}
// 关闭tab
const handleDelete = (targetKey: string, action: string) => {
    if (action === "remove") {
        store.commit("")
    }
}
</script>

<style scoped></style>
