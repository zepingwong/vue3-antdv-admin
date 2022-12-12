<template>
    <a-tooltip placement="bottom" @click="switchThemeDrawerStatus()">
        <template #title>
            <span>主题设置</span>
        </template>
        <a-icon class="text-xl px-8" custom type="icon-theme" />
    </a-tooltip>
    <a-drawer :visible="getThemeDrawerStatus" title="主题配置" width="450" @close="switchThemeDrawerStatus()">
        <a-form :model="theme">
            <a-form-item label="主题">
                <a-radio-group :value="getTheme" button-style="solid" @change="(val) => switchTheme(val.target.value)">
                    <a-radio-button
                        value="blue"
                        :style="{ color: getTheme === 'blue' ? '#ffffff' : blue.color.primaryColor }"
                    >
                        默认
                    </a-radio-button>
                    <a-radio-button
                        value="green"
                        :style="{ color: getTheme === 'green' ? '#ffffff' : green.color.primaryColor }"
                    >
                        绿茵广场
                    </a-radio-button>
                    <a-radio-button value="white">触碰纯白</a-radio-button>
                    <a-radio-button
                        value="red"
                        :style="{ color: getTheme === 'red' ? '#ffffff' : red.color.primaryColor }"
                    >
                        白白朱朱
                    </a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="布局">
                <a-radio-group
                    :value="getLayout"
                    class="layout-radio-group w-full"
                    @change="(val) => switchLayout(val.target.value)"
                >
                    <a-row :gutter="8">
                        <a-col :span="12">
                            <a-radio-button class="h-140px p-0 text-center" value="Vertical">
                                纵向布局
                                <zongxiangbuju class="radio__button-icon w-160px" />
                            </a-radio-button>
                        </a-col>
                        <a-col :span="12">
                            <a-radio-button class="h-140px p-0 text-center" value="Comprehensive">
                                综合布局
                                <zonghebuju class="radio__button-icon w-160px" />
                            </a-radio-button>
                        </a-col>
                    </a-row>
                    <a-row :gutter="8" style="padding-top: 8px">
                        <a-col :span="12">
                            <a-radio-button class="h-140px p-0 text-center" value="Column">
                                分栏布局
                                <fenlanbuju class="radio__button-icon w-160px" />
                            </a-radio-button>
                        </a-col>
                    </a-row>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="是否显示标签栏">
                <a-switch :checked="getShowTabs" @change="switchShowTabs" />
            </a-form-item>
            <a-form-item v-if="getShowTabs" label="标签栏风格">
                <a-select :value="getTabsBarStyle" @change="(val) => switchTabsBarStyle(val)">
                    <a-select-option value="smooth">圆滑风格</a-select-option>
                    <a-select-option value="card">卡片风格</a-select-option>
                    <a-select-option value="smart">灵动风格</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item v-if="getShowTabs" label="标签栏是否显示图标">
                <a-switch :checked="getShowTabsBarIcon" @change="switchShowTabsBarIcon" />
            </a-form-item>
            <a-form-item v-if="['Column', 'Vertical'].includes(getLayout)" label="是否显示面包屑">
                <a-switch :checked="getShowBreadcrumb" @change="switchShowBreadcrumb" />
            </a-form-item>
            <a-form-item v-if="getShowBreadcrumb" label="面包屑是否显示图标">
                <a-switch :checked="getShowBreadcrumbIcon" @change="switchShowBreadcrumbIcon" />
            </a-form-item>

            <a-form-item v-if="getColumnStyle && getLayout === 'Column'" label="分栏风格">
                <a-select :value="getColumnStyle" @change="(val) => switchColumnStyle(val)">
                    <a-select-option value="vertical">纵向</a-select-option>
                    <a-select-option value="horizontal">横向</a-select-option>
                    <a-select-option value="card">卡片</a-select-option>
                    <a-select-option value="arrow">箭头</a-select-option>
                </a-select>
            </a-form-item>
        </a-form>
    </a-drawer>
</template>

<script lang="ts" setup>
import AIcon from "@/components/aicon/index.vue"
import { computed } from "vue"
import { useStore } from "vuex"
import { ITheme } from "#/index"
import { useThemeSetting } from "@/hooks"
import Zongxiangbuju from "@/layout/components/ThemeDrawer/zongxiangbuju.vue"
import Zonghebuju from "@/layout/components/ThemeDrawer/zonghebuju.vue"
import Fenlanbuju from "@/layout/components/ThemeDrawer/fenlanbuju.vue"
import { blue, green, red } from "../../../../configs/theme"

const {
    getTheme,
    switchTheme,
    getThemeDrawerStatus,
    switchThemeDrawerStatus,
    switchLayout,
    getLayout,
    switchShowTabs,
    getShowTabs,
    getTabsBarStyle,
    getShowTabsBarIcon,
    switchShowTabsBarIcon,
    switchShowBreadcrumb,
    getShowBreadcrumbIcon,
    switchShowBreadcrumbIcon,
    switchTabsBarStyle,
    getShowBreadcrumb,
    getColumnStyle,
    switchColumnStyle
} = useThemeSetting()
const store = useStore()
const theme = computed<ITheme>(() => store.state.theme)
</script>

<style scoped >
:deep(.ant-form-item-control) {
    text-align: right;
}

:deep(.ant-select-selection-item) {
    text-align: center;
}
</style>
