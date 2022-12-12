import { ViteEnv } from "../../../types/global"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { PluginOption } from "vite"
import { configUnocssPlugin } from "./unocss"

export async function configVitePlugins(root: string, viteEnv: ViteEnv, isBuild: boolean) {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        // have to
        vue({
            reactivityTransform: true
        }),
        // have to
        vueJsx()
    ]
    // unocss
    vitePlugins.push(configUnocssPlugin())
    return vitePlugins
}
