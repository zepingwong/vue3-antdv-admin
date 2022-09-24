<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" v-model:open-keys="openKeys" theme="dark" mode="inline">
                <template v-for="({ meta, children, name, path }, parentIndex) in routes" :key="parentIndex">
                    <a-sub-menu v-if="children.length > 1" :key="name">
                        <template #title>
                            <span>{{ meta.title }}</span>
                        </template>
                        <template #icon>
                            <user-outlined />
                        </template>
                        <a-menu-item v-for="childrenItem in children" :key="childrenItem.name">
                            <router-link :to="childrenItem.path">
                                <user-outlined />
                                {{ childrenItem.meta.title }}
                            </router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else :key="children && children.length === 1 ? children[0].name : name">
                        <template #icon>
                            <user-outlined />
                        </template>
                        <router-link :to="children && children.length === 1 ? children[0].path : path">
                            {{ meta.title }}
                        </router-link>
                    </a-menu-item>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined v-if="store.state.theme.collapsed" class="trigger" @click="handleSwitchSidebar" />
                <menu-fold-outlined v-else class="trigger" @click="handleSwitchSidebar" />
                <header-tabs></header-tabs>
            </a-layout-header>
            <!--内容-->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }">
                <main-content></main-content>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import MainContent from "@/layout/components/MainContent/index.vue"
import { MenuUnfoldOutlined, UserOutlined, MenuFoldOutlined } from "@ant-design/icons-vue"
import { useStore } from "vuex"
import { computed, onBeforeMount, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"
const route = useRoute()
const router = useRouter()
const routes = computed(() => {
    return router.options.routes
})
const selectedKeys = ref(["Home"])
const openKeys = ref(["Root"])
const store = useStore()
const handleSwitchSidebar = () => {
    store.dispatch("theme/SWITCH_SIDEBAR")
}
onBeforeMount(() => {
    selectedKeys.value[0] = route.name as string
})
watch(
    () => route.path,
    () => {
        selectedKeys.value[0] = route.name as string
    }
)
</script>

<style lang="stylus" scoped>
:deep(.ant-layout-header) {
  height 108px
}
.trigger {
  font-size 18px
  line-height 64px
  padding 0 24px
  cursor pointer
  transition: color 0.3s

  &:hover {
    color: #1890ff
  }
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
