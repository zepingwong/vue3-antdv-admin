<template>
    <div :class="classObj" class="layout-wrapper"></div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()
const classObj = computed(() => {
    return {
        mobile: device.value === "mobile"
    }
})
</script>

<style scoped lang="stylus">
.layout-wrapper {
  position relative
  width 100%
  height 100%
}
</style>
