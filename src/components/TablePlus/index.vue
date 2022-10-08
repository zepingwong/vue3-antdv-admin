<template>
    <div>
        <Table :columns="columns" :loading="tableLoading && showLoading" :data-source="dataSource"></Table>
    </div>
</template>
<script lang="ts" setup>
import { PropType, ref } from "vue"
import { Table } from "ant-design-vue"
import { ColumnProps, tableProps } from "ant-design-vue/es/table"
// table 加载动画
const tableLoading = ref<boolean>(false)
defineProps({
    ...tableProps,
    /**
     * 表格列
     */
    columns: {
        type: Array as PropType<ColumnProps[]>,
        required: true
    },
    /**
     * 是否显示表格loading
     */
    showLoading: {
        type: Boolean,
        default: true
    },
    dataSource: {
        type: Array,
        required: true
    }
})
</script>
