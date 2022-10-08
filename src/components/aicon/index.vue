<template>
    <component :is="type" v-if="!custom" :style="style"></component>
    <icon-font v-else :type="type" :style="style"></icon-font>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { HomeOutlined, createFromIconfontCN } from "@ant-design/icons-vue"
const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/c/font_3683886_brlnn91txej.js"
})
export default defineComponent({
    name: "AIcon",
    components: { HomeOutlined, IconFont },
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
<style lang="stylus" scoped></style>
