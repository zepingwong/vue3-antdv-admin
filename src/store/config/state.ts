import { getLocalStorage } from "@/utils/storage"
import { defaultTheme, defaultSystem } from "@/config"
const { collapse } = getLocalStorage("collapse")

export default {
    device: "desktop",
    collapse: collapse || false,
    theme: getLocalStorage("theme") || { ...defaultTheme },
    system: { ...defaultSystem },
    extra: { first: "", transferRouteName: "" }
}
