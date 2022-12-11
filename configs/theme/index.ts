import _customTheme from "./config"
import _defaultTheme from "../default/theme"

Object.assign(_customTheme, _defaultTheme)
export const themeSettings = _customTheme

export * from "./green"
export * from "./red"
export * from "./blue"
