<template>
    <div>
        <sidebar-logo :small="true" />
        <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="inline"
            :class="`column-bar-${store.state.theme.columnStyle}`"
        >
            <a-menu-item v-for="item in parentRoute" :key="item.name">
                <router-link :to="item.path">
                    <a-icon
                        :custom="item.meta?.isCustomSvg"
                        :type="item.meta?.icon ? item.meta?.icon : ''"
                        :style="{
                            width: store.state.theme.columnStyle === 'horizontal' ? 'auto' : '100%'
                        }"
                    ></a-icon>
                    {{ item.meta?.title }}
                </router-link>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script lang="ts" setup>
import AIcon from "@/components/aicon/index.vue"
import { computed, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
import { constantRouter } from "@/router/constant"
import SidebarLogo from "@/layout/components/SidebarLogo/index.vue"
const store = useStore()
const router = useRouter()
const route = useRoute()
const selectedKeys = ref(["Root"])
const parentRoute = computed(() => {
    return router.options.routes.filter((item) => {
        // 登录、404等路由不能出现在顶部菜单
        if (constantRouter.indexOf(item.path) === -1) {
            // 权限筛选
            if (item.meta?.roles && item.meta.roles.length > 0) {
                if (
                    (item.meta.roles.indexOf("buyer") !== -1 && store.state.user.info.U_IsBuyer === "Y") ||
                    (item.meta.roles.indexOf("sale") !== -1 && store.state.user.info.U_IsSale === "Y") ||
                    store.state.user.info.SuperUser === "Y"
                ) {
                    // 有子路由的放到顶部菜单栏
                    if (item.children && item.children.length > 0) {
                        return true
                    }
                }
            } else {
                return true
            }
        }
    })
})
watch(
    () => route.fullPath,
    () => {
        selectedKeys.value[0] = route.matched[0].name as string
    }
)
</script>

<style lang="stylus" scoped>
.column-bar {
  &-horizontal {
    width 84px
    background-color transparent
    :deep(.ant-menu-item) {
      height 40px
      white-space initial
      padding 0 !important
      display flex
      margin-bottom 0
      margin-top 0
      text-align center
      line-height 25px
      .ant-menu-title-content {
        flex none
        margin auto
      }
    }
  }
  &-arrow {
    width 64px
    background-color transparent
    :deep(.ant-menu-item) {
      height 64px
      white-space initial
      padding 0 !important
      display flex
      margin-bottom 0
      margin-top 0
      text-align center
      line-height 25px
      &-selected {
        background-color transparent !important
      }
      .ant-menu-title-content {
        flex none
        margin auto
      }
    }
  }
  &-card {
    width 64px
    background-color transparent
    :deep(.ant-menu-item) {
      background-color transparent
      height 64px
      white-space initial
      padding 0 !important
      display flex
      margin-bottom 0
      margin-top 0
      text-align center
      line-height 20px
      &-selected {
        background-color transparent !important
        .ant-menu-title-content {
          background-color #1890ff
          border-radius 5px
          width 80%
          height 80%
          display flex
          .router-link-active {
            margin auto
          }
        }
      }
      .ant-menu-title-content {
        flex none
        margin auto
      }
    }
  }
  &-vertical {
    width 64px
    :deep(.ant-menu-item) {
      height 64px
      white-space initial
      padding 0 !important
      display flex
      margin-bottom 0
      margin-top 0
      text-align center
      line-height 25px
      .ant-menu-title-content {
        flex none
        margin auto
      }
    }
  }
  :deep(.ant-menu-inline){
    margin-bottom 0 !important
  }
  :deep(.ant-menu-sub) {
    background transparent
  }
}
</style>
