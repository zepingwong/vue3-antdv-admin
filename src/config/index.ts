/**
 * 配置导出，请勿修改此文件
 */

import { defaultSystem, defaultNet } from "./default"

import customSystem from "./system"
import customNet from "./net"

export * from "./default"

export const system = Object.assign(customSystem, defaultSystem)
export const net = Object.assign(customNet, defaultNet)

/**
 * 导出配置，customConfig 优先级高于 defaultConfig
 */
export default {
    ...system,
    ...net
}
