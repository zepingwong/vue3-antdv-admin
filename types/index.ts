export * from "./global"
export * from "./config"
export * from "./store"
export * from "./tab"
export * from "./router"

export interface Fn<T = any, R = T> {
    (...arg: T[]): R
}
