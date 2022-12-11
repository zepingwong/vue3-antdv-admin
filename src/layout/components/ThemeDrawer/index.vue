<template>
    <div class="theme__drawer"></div>
    <a-tooltip placement="bottom" @click="switchThemeDrawerStatus()">
        <template #title>
            <span>主题设置</span>
        </template>
        <a-icon class="theme__drawer-trigger" custom type="icon-theme" />
    </a-tooltip>
    <a-drawer :visible="getThemeDrawerStatus" title="主题配置" width="285" @close="switchThemeDrawerStatus()">
        <a-form :model="theme">
            <a-form-item label="主题">
                <a-select :value="getTheme" @change="(val) => switchTheme(val)">
                    <a-select-option value="blue">默认</a-select-option>
                    <a-select-option value="green">绿茵广场</a-select-option>
                    <a-select-option value="white">触碰纯白</a-select-option>
                    <a-select-option value="red">白白朱朱</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="布局">
                <a-radio-group :value="getLayout" @change="(val) => switchLayout(val.target.value)">
                    <a-row :gutter="8">
                        <a-col :span="24">
                            <a-radio-button value="Vertical">
                                纵向布局
                                <a-icon type="icon-zongxiangbuju" custom class="radio__button-icon"></a-icon>
                            </a-radio-button>
                        </a-col>
                        <a-col :span="24">
                            <a-radio-button value="Comprehensive">
                                综合布局
                                <a-icon type="icon-zonghebuju" custom class="radio__button-icon"></a-icon>
                            </a-radio-button>
                        </a-col>
                        <a-col :span="24">
                            <a-radio-button value="Column">
                                分栏布局
                                <a-icon type="icon-fenlanbuju" custom class="radio__button-icon"></a-icon>
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

            <a-form-item v-if="theme.columnStyle && theme.layout === 'Column'" label="分栏风格">
                <a-select v-model:value="theme.columnStyle">
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
    getShowBreadcrumb
} = useThemeSetting()
const store = useStore()
const theme = computed<ITheme>(() => store.state.theme)
</script>

<style scoped lang="stylus">
:deep(.ant-radio-group) {
  width 100%
}

:deep(.ant-radio-button-wrapper) {
  height 146px
  padding 0
  width 100%
  text-align center
  display flex

  .ant-radio-button {
    text-align center
  }

  .radio__button-icon {
    font-size 172px
    align-self center

    svg {
      height 0.65em
    }
  }

  &:hover {
    border-color #1890ff
  }
}

:deep(.ant-form-item-control) {
  text-align right
}

:deep(.ant-select-selection-item) {
  text-align center
}

.theme__drawer {
  &-trigger {
    font-size 20px
    padding 0 20px
  }
}
</style>
