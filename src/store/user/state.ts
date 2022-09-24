import { getLocalStorage } from "@/utils/storage"

export default {
    info: {},
    token: getLocalStorage("token") || ""
}
