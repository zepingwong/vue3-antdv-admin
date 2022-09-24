<template>
    <div class="header-nav">
        <!--侧边栏开关-->
        <header-toggle></header-toggle>
        <div class="right-panel">
            <!--主题设置-->
            <theme-drawer></theme-drawer>
            <!--用户头像-->
            <user-dropdown></user-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import HeaderToggle from "@/layout/components/HeaderToggle/index.vue"
</script>

<style lang="stylus" scoped>
.header-nav {
  height 64px
  box-sizing border-box
  display flex
  padding 0 24px
  .right-panel {
    line-height 64px
    position absolute
    right 24px
    display: flex
    align-content: center
    align-items: center
    justify-content: flex-end
  }
}
</style>
