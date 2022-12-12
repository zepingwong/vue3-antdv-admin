import { getLocalStorage } from "@/utils/storage"
const { collapse } = getLocalStorage("collapse")

export default {
    device: "desktop",
    collapse: collapse || false,
    extra: { first: "", transferRouteName: "" }
}
