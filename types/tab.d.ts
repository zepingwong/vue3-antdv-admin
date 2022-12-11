import { LocationQuery } from "vue-router"

export type ITab = {
    name: string
    title: string
    fullPath: string
    affix: boolean
    icon: string
    isCustomSvg: boolean
    query: LocationQuery
}
