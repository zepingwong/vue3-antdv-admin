import { is } from "@/utils/validate"

export function isString(val: unknown): val is string {
    return is(val, "String")
}
