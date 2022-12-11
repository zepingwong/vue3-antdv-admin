<template>
    <div
        :class="{
            'layout-wrapper': true
        }"
    >
        <component :is="`${getLayout}Layout`" />
    </div>
</template>

<script lang="ts" setup>
import { useThemeSetting } from "@/hooks"

const { getLayout } = useThemeSetting()
</script>

<style scoped></style>
