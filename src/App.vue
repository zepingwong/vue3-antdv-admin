<template>
    <div
        id="app"
        :class="{
            'layout-wrapper': true,
            mobile: store.state.theme.device === 'mobile'
        }"
    >
        <router-view v-if="constantRouter.indexOf(route.path) !== -1"></router-view>
        <component :is="`${store.state.theme.layout}Layout`" v-else />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { constantRouter } from "@/router/constant"

const route = useRoute()
const store = useStore()
</script>

<style scoped></style>
