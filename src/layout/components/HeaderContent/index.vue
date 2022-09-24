<template>
    <div class="header-content">
        <menu-unfold-outlined v-if="store.state.theme.collapsed" class="trigger" @click="handleSwitchSidebar" />
        <menu-fold-outlined v-else class="trigger" @click="handleSwitchSidebar" />
        <div class="right-panel">
          <theme-drawer></theme-drawer>
          <user-dropdown></user-dropdown>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import { useStore } from "vuex"
const store = useStore()
const handleSwitchSidebar = () => {
    store.dispatch("theme/SWITCH_SIDEBAR")
}
</script>

<style scoped lang="stylus">
.header-content {
  box-sizing border-box
  display flex
  padding 0 24px
  .trigger {
    font-size 18px
    line-height 64px
    cursor pointer
    transition: color 0.3s
    &:hover {
      color: #1890ff
    }
  }
  .theme {
    position absolute
    line-height 64px
    font-size 18px
    right 200px
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
