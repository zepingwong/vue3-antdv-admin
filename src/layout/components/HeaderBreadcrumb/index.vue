<template>
    <div v-if="getShowBreadcrumb" class="header-breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
                <a-icon v-if="getShowBreadcrumbIcon" :custom="item.meta.isCustomSvg" :type="item.meta.icon"></a-icon>
                {{ item.meta.title }}
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import AIcon from "@/components/aicon/index.vue"
import { useThemeSetting } from "@/hooks"

const { getShowBreadcrumbIcon, getShowBreadcrumb } = useThemeSetting()

const route = useRoute()
</script>

<style lang="stylus" scoped>
.header-breadcrumb {
  height 64px
  line-height 64px
  padding-left 20px
  margin-top -5px

  .ant-breadcrumb {
    font-size 16px
    line-height 64px
  }
}
</style>
