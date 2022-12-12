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

/**
 * Get the configuration file variable name
 * @param env
 */
export const getConfigFileName = (env: Record<string, any>) => {
    return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || "__APP"}__CONF__`.toUpperCase().replace(/\s/g, "")
}
