<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" v-model:open-keys="openKeys" theme="dark" mode="inline">
                <template v-for="({ meta, children, path }, parentIndex) in routes" :key="parentIndex">
                    <a-sub-menu v-if="children.length > 1" :key="`${parentIndex}-1`">
                        <template #title>
                            <span>{{ meta.title }}</span>
                        </template>
                        <template #icon>
                            <user-outlined />
                        </template>
                        <a-menu-item
                            v-for="(childrenItem, childrenIndex) in children"
                            :key="parentIndex + '-' + childrenIndex"
                        >
                            <router-link :to="childrenItem.path">
                                <user-outlined />
                                {{ childrenItem.meta.title }}
                            </router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item v-else-if="children.length === 1" :key="`${parentIndex}-2`">
                        <router-link :to="children[0].path">
                            <user-outlined />
                            {{ meta.title }}
                        </router-link>
                    </a-menu-item>
                    <a-menu-item v-else :key="`${parentIndex}-3`">
                        <router-link :to="path">
                            <user-outlined />
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
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import HeaderTabs from "@/layout/components/HeaderTabs/index.vue"

const router = useRouter()
const routes = computed(() => {
    return router.options.routes
})
const selectedKeys = ref(["1"])
const openKeys = ref(["1"])
const store = useStore()
const handleSwitchSidebar = () => {
    store.dispatch("theme/SWITCH_SIDEBAR")
}
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
