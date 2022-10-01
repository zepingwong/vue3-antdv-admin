<template>
    <component :is="type" v-if="!custom"></component>
    <icon-font v-else :type="type"></icon-font>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import * as antIcons from "@ant-design/icons-vue"
const IconFont = antIcons.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/c/font_3683886_cjltukdq3jm.js"
})
export default defineComponent({
    name: "Aicon",
    components: { antIcons, IconFont },
    props: {
        type: {
            required: true,
            type: String
        },
        custom: {
            type: Boolean,
            default: false
        }
    }
})
</script>
<style lang="stylus" scoped></style>
