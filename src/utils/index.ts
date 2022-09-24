import { ComponentInternalInstance, getCurrentInstance } from "vue"

export const useCurrentInstance = () => {
    let proxy: Record<string, any>
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    // ts-ignore
    // eslint-disable-next-line prefer-const
    proxy = appContext.config.globalProperties
    return {
        proxy
    }
}
