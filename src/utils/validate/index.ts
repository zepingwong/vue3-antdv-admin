import { isJson } from "@/utils/validate/json"

export const json = {
    isJson
}
export function isNull(val: unknown): val is null {
    return val === null
}
export function is(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`
}
export function isDef<T = unknown>(val?: T): val is T {
    return typeof val !== "undefined"
}

export function isUnDef<T = unknown>(val?: T): val is T {
    return !isDef(val)
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
    return isUnDef(val) || isNull(val)
}
