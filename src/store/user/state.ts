import { getLocalStorage } from "@/utils/storage"
import { IUser } from "@/types/IUser"

const state: IUser = {
    info: {
        username: null
    },
    token: getLocalStorage("token") || null
}

export default state
