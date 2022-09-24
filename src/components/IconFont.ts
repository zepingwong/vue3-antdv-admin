import { defineComponent } from "vue"
import { createFromIconfontCN } from "@ant-design/icons-vue"

export default defineComponent({
    props: {},
    setup() {
        const IconFont = createFromIconfontCN({
            scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        })
        return {
            IconFont
        }
    },
    render() {
        return null
    }
})
