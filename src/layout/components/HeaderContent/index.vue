<template>
    <div class="header-content">
        <div class="left-panel">
            <!--侧边栏开关-->
            <header-toggle />
            <!--面包屑导航-->
            <header-breadcrumb />
        </div>
        <div class="right-panel">
            <!--主题设置-->
            <theme-drawer />
            <!--用户头像-->
            <user-dropdown />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import HeaderToggle from "@/layout/components/SidebarToggle/index.vue"
import HeaderBreadcrumb from "@/layout/components/HeaderBreadcrumb/index.vue"
</script>

<style scoped lang="stylus">
.header-content {
  box-sizing border-box
  display flex
  padding 0 24px
  height 60px

  .theme {
    position absolute
    line-height 64px
    font-size 18px
    right 200px
  }

  .left-panel {
    display flex
    align-items center
    justify-items center
    line-height 64px
    box-sizing border-box
  }

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
