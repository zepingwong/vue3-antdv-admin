<template>
    <div class="header-breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">
              <cloud-outlined v-if="store.state.theme.showBreadcrumbIcon"></cloud-outlined>
                {{ item.meta.title }}
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script lang="ts" setup>
import { watch } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { CloudOutlined } from "@ant-design/icons-vue"
const route = useRoute()
const store = useStore()
watch(
    () => route.fullPath,
    () => {
        console.log(route.matched)
    }
)
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
