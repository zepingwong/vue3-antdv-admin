<template>
    <div
        id="app"
        :class="{
            'layout-wrapper': true,
            mobile: store.state.theme.device === 'mobile'
        }"
    >
        <component :is="`${store.state.theme.layout}Layout`" />
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
const store = useStore()
</script>

<style scoped></style>
