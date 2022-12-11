<template>
    <div
        :class="{
            'layout-wrapper': true,
            mobile: store.state.theme.device === 'mobile'
        }"
    >
        <router-view v-if="constantRouter.indexOf(route.path) !== -1"></router-view>
        <component :is="`${getLayout}Layout`" v-else />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { useThemeSetting } from "@/hooks"

const { getLayout } = useThemeSetting()
import { constantRouter } from "@/router/constant"

const route = useRoute()
const store = useStore()
</script>

<style scoped lang="less">
.layout-wrapper {
    height: 100%;
}
</style>
