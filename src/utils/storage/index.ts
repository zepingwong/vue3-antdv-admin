import { json } from "@/utils/validate"

export const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key) || ""
    if (json.isJson(value)) {
        return JSON.parse(value)
    } else {
        return false
    }
}

export const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}
