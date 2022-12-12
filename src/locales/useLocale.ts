/**
 * Multi-language related operations
 */
import type { LocaleType } from "#/config"

import { i18n } from "./setupI18n"
import store from "@/store"
import { unref, computed } from "vue"
import { loadLocalePool, setHtmlPageLang } from "./helper"
import { Recordable } from "#/global"

interface LangModule {
    message: Recordable
    dateLocale: Recordable
    dateLocaleName: string
}

function setI18nLanguage(locale: LocaleType) {
    if (i18n.mode === "legacy") {
        i18n.global.locale = locale
    } else {
        ;(i18n.global.locale as any).value = locale
    }
    store.dispatch("locale/setLocaleInfo", { locale: locale }).then()
    setHtmlPageLang(locale)
}

export function useLocale() {
    const getLocale = computed(() => store.state.locale.localInfo.locale)

    const getAntdLocale = computed((): any => {
        return {}
    })

    // Switching the language will change the locale of useI18n
    // And submit to configuration modification
    async function changeLocale(locale: LocaleType) {
        const globalI18n = i18n.global
        const currentLocale = unref(globalI18n.locale)
        if (currentLocale === locale) {
            return locale
        }

        if (loadLocalePool.includes(locale)) {
            setI18nLanguage(locale)
            return locale
        }
        const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule
        if (!langModule) return

        const { message } = langModule

        globalI18n.setLocaleMessage(locale, message)
        loadLocalePool.push(locale)

        setI18nLanguage(locale)
        return locale
    }

    return {
        getLocale,
        changeLocale,
        getAntdLocale
    }
}
