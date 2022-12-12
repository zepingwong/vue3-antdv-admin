<template>
    <div>
        <section>
            <router-view v-slot="{ Component, route }">
                <transition mode="out-in" name="fade-transform">
                    <component :is="Component" v-if="route.meta.noKeepAlive" />
                    <keep-alive v-else>
                        <component :is="Component" />
                    </keep-alive>
                </transition>
            </router-view>
        </section>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
