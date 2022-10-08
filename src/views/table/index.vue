<template>
    <a-table :columns="columns" :data-source="dataSource"></a-table>
</template>

<script lang="ts" setup>
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
