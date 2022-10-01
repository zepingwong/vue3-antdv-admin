/**
 * 配置导出，请勿修改此文件
 */

import { defaultCommon, defaultTheme, defaultSystem, defaultNet } from "./default"
import customTheme from "./theme"
import customCommon from "./common"
import customSystem from "./system"
import customNet from "./net"

export * from "./default"

export const common = Object.assign(customCommon, defaultCommon)
export const theme = Object.assign(customTheme, defaultTheme)
export const system = Object.assign(customSystem, defaultSystem)
export const net = Object.assign(customNet, defaultNet)

/**
 * 导出配置，customConfig 优先级高于 defaultConfig
 */
export default {
    ...common,
    ...theme,
    ...system,
    ...net
}
