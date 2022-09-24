<template>
    <a-layout style="height: 100%">
        <!--侧边栏-->
        <a-layout-sider v-model:collapsed="store.state.theme.collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="vertical">
                <a-menu-item key="1">
                    <user-outlined />
                    <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <video-camera-outlined />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <upload-outlined />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!--头部-->
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined v-if="store.state.theme.collapsed" class="trigger" @click="handleSwitchSidebar" />
                <menu-fold-outlined v-else class="trigger" @click="handleSwitchSidebar" />
            </a-layout-header>
            <!--内容-->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
                >Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import {
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuFoldOutlined
} from "@ant-design/icons-vue"
import { useStore } from "vuex"
import { ref } from "vue"

const selectedKeys = ref(["1"])
const store = useStore()
const handleSwitchSidebar = () => {
    store.dispatch("theme/SWITCH_SIDEBAR")
}
</script>

<style lang="stylus" scoped>
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
