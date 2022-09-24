<!--综合布局 -->
<template>
    <a-layout style="height: 100%">
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" v-model:open-keys="openKeys" theme="dark" mode="inline">
                <a-menu-item v-for="({ meta }, index) in routes" :key="index">
                    <template #icon>
                        <user-outlined />
                    </template>
                    <router-link :to="'/'">{{ meta.title }}</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header
                style="background: #fff; padding: 0"
                :style="{
                    height: store.state.theme.showTabs ? '104px' : '64px'
                }"
            >
                <header-nav></header-nav>
                <header-tabs v-if="store.state.theme.showTabs"></header-tabs>
            </a-layout-header>
            <!--内容-->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
                <main-content></main-content>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import HeaderNav from "@/layout/components/HeaderNav/index.vue"
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"
import MainContent from "@/layout/components/MainContent/index.vue"
import { UserOutlined } from "@ant-design/icons-vue"
import { useStore } from "vuex"
import { RouteRecordRaw, useRoute, useRouter } from "vue-router"
import { Ref, ref, watch } from "vue"

const store = useStore()
const route = useRoute()
const router = useRouter()
const selectedKeys = ref(["Root"])
const openKeys = ref(["Root"])
const routes: Ref<RouteRecordRaw[]> = ref([])

watch(
    () => route.fullPath,
    () => {
        const tmp = router.options.routes.find((item) => item.name === route.matched[0].name)
        if (tmp && tmp.children) {
            routes.value = tmp.children
        }
    }
)
</script>

<style scoped lang="stylus">
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
