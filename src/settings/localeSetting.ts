import type { LocaleSetting, LocaleType, Fn } from "#/index"

export interface DropMenu {
    onClick?: Fn
    to?: string
    icon?: string
    event: string | number
    text: string
    disabled?: boolean
    divider?: boolean
}

export const LOCALE: { [key: string]: LocaleType } = {
    ZH_CN: "zh_CN",
    EN_US: "en"
}

export const localeSetting: LocaleSetting = {
    showPicker: true,
    // Locale
    locale: LOCALE.ZH_CN,
    // Default locale
    fallback: LOCALE.ZH_CN,
    // available Locales
    availableLocales: [LOCALE.ZH_CN, LOCALE.EN_US]
}

// locale list
export const localeList: DropMenu[] = [
    {
        text: "简体中文",
        event: LOCALE.ZH_CN
    },
    {
        text: "English",
        event: LOCALE.EN_US
    }
]
