<template>
    <table-plus :columns="columns" :data-source="dataSource"></table-plus>
</template>

<script lang="ts" setup>
import TablePlus from "@/components/TablePlus/index.vue"
const columns = [
    {
        title: "Id",
        dataIndex: "id"
    },
    {
        title: "用户名",
        dataIndex: "username"
    }
]
const dataSource = [
    {
        id: 1,
        username: "test"
    }
]
</script>

<style scoped></style>
