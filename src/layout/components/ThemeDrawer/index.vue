<template>
    <div class="theme__drawer"></div>
    <a-tooltip placement="bottom" @click="handleOpenDrawer">
        <template #title>
            <span>主题设置</span>
        </template>
        <a-icon class="theme__drawer-trigger" custom type="icon-theme" />
    </a-tooltip>
    <a-drawer v-model:visible="theme.themeDrawer" title="主题配置" width="285">
        <template #extra>
            <a-button type="primary" @click="handleSaveTheme">保存</a-button>
        </template>
        <a-form :model="theme">
            <!--<a-divider orientation="left">标签栏</a-divider>-->
            <a-form-item label="布局">
                <a-radio-group v-model:value="theme.layout">
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
                <a-switch v-model:checked="theme.showTabs" />
            </a-form-item>
            <a-form-item v-if="theme.showTabs" label="标签栏风格">
                <a-select v-model:value="theme.tabsBarStyle">
                    <a-select-option value="smooth">圆滑风格</a-select-option>
                    <a-select-option value="card">卡片风格</a-select-option>
                    <a-select-option value="smart">灵动风格</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item v-if="theme.showTabs" label="标签栏是否显示图标">
                <a-switch v-model:checked="theme.showTabsBarIcon" />
            </a-form-item>
            <a-form-item label="是否显示面包屑">
                <a-switch v-model:checked="theme.showBreadcrumb" />
            </a-form-item>
            <a-form-item v-if="theme.showBreadcrumb" label="面包屑是否显示图标">
                <a-switch v-model:checked="theme.showBreadcrumbIcon" />
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
import { IThemeConfig } from "#/index"

const store = useStore()
const theme = computed<IThemeConfig>(() => store.state.theme)
// 打开主题抽屉
const handleOpenDrawer = () => {
    store.commit("theme/SET_THEME_DRAWER", true)
}
// 保存主题
const handleSaveTheme = () => {
    store.dispatch("theme/SAVE_THEME", theme.value)
    store.commit("theme/SET_THEME_DRAWER", false)
}
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
