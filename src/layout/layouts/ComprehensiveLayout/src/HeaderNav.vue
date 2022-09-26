<template>
    <div class="header-nav">
        <div class="left-panel">
            <!--侧边栏开关-->
            <header-toggle></header-toggle>
            <a-menu v-model:selectedKeys="selectedKeys" v-model:open-keys="openKeys" theme="light" mode="horizontal">
                <a-menu-item v-for="item in parentRoute" :key="item.name">
                    <router-link :to="item.path">
                        <a-icon :type="item.meta.icon"></a-icon>
                        {{ item.meta.title }}
                    </router-link>
                </a-menu-item>
            </a-menu>
        </div>

        <div class="right-panel">
            <!--主题设置-->
            <theme-drawer></theme-drawer>
            <!--用户头像-->
            <user-dropdown></user-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AIcon from "@/components/aicon/index.vue"
import ThemeDrawer from "@/layout/components/ThemeDrawer/index.vue"
import UserDropdown from "@/layout/components/UserDropdown/index.vue"
import HeaderToggle from "@/layout/components/HeaderToggle/index.vue"
import { computed, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()
const selectedKeys = ref(["Root"])
const openKeys = ref(["Root"])
const parentRoute = computed(() => {
    return router.options.routes.filter((item) => item.children)
})
watch(
    () => route.fullPath,
    () => {
        selectedKeys.value[0] = route.matched[0].name as string
    }
)
</script>

<style lang="stylus" scoped>
.header-nav {
  height 64px
  box-sizing border-box
  display flex
  padding 0 24px

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
