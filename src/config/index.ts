/**
 * 配置导出，请勿修改此文件
 */

import { _common, _theme, _system } from "./default"
import customTheme from "./theme"
import customCommon from "./common"
import customSystem from "./system"

export const defaultTheme = _theme
export const defaultCommon = _common
export const defaultSystem = _system

export const common = Object.assign(customCommon, _common)
export const theme = Object.assign(customTheme, _theme)
export const system = Object.assign(customSystem, _system)

/**
 * 导出配置，customConfig 优先级高于 defaultConfig
 */
export default {
    ...common,
    ...theme,
    ...system
}
