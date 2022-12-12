<template>
    <a-config-provider :locale="zhCN">
        <div
            :class="{
                'layout-wrapper': true,
                mobile: store.state.theme.device === 'mobile'
            }"
        >
            <router-view v-if="constantRouter.indexOf(route.path) !== -1"></router-view>
            <component :is="`${getLayout}Layout`" v-else />
        </div>
    </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from "ant-design-vue/es/locale/zh_CN"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { useThemeSetting } from "@/hooks"
import { constantRouter } from "@/router/constant"
import { onMounted } from "vue"

const { getLayout, getTheme, switchTheme } = useThemeSetting()

onMounted(() => {
    switchTheme(getTheme.value)
})
const route = useRoute()
const store = useStore()
</script>

<style scoped lang="less">
.layout-wrapper {
    height: 100%;
}
</style>
