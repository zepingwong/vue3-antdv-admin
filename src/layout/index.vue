<template>
    <div
        :class="{
            'layout-wrapper': true,
            mobile: store.state.config.device === 'mobile'
        }"
    >
        <component
          :is="`${store.state.config.theme.layout}-layout`"
        />
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
const store = useStore()
</script>

<style scoped lang="stylus">
.layout-wrapper {
  position relative
  width 100%
  height 100%
}
</style>
