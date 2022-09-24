<template>
    <router-view v-slot="{ Component, route }">
        <component :is="Component" v-if="route.meta.noKeepAlive" />
        <keep-alive v-else>
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
