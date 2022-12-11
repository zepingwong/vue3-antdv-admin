<template>
    <component :is="type" v-if="!custom" :style="style"></component>
    <icon-font v-else :type="type" :style="style"></icon-font>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import {
    HomeOutlined,
    createFromIconfontCN,
    QuestionCircleOutlined,
    CheckOutlined,
    EditOutlined,
    SearchOutlined,
    RedoOutlined,
    DownOutlined,
    CloseOutlined,
    UserOutlined,
    InboxOutlined,
    CopyOutlined,
    LoadingOutlined,
    CheckCircleOutlined,
    PoweroffOutlined,
    MailOutlined,
    MessageOutlined,
    PlusOutlined,
    ClearOutlined
} from "@ant-design/icons-vue"
const ICON_URL: string = import.meta.env.VITE_ICONFONT_URL
const IconFont = createFromIconfontCN({
    scriptUrl: ICON_URL
})
export default defineComponent({
    name: "AIcon",
    components: {
        HomeOutlined,
        IconFont,
        QuestionCircleOutlined,
        CheckOutlined,
        UserOutlined,
        MessageOutlined,
        RedoOutlined,
        DownOutlined,
        EditOutlined,
        SearchOutlined,
        InboxOutlined,
        CloseOutlined,
        CopyOutlined,
        MailOutlined,
        ClearOutlined,
        LoadingOutlined,
        PlusOutlined,
        PoweroffOutlined,
        CheckCircleOutlined
    },
    props: {
        type: {
            required: true,
            type: String
        },
        custom: {
            type: Boolean,
            default: false
        },
        style: {
            type: Object,
            default: () => ({})
        }
    }
})
</script>
<style lang="less" scoped></style>
