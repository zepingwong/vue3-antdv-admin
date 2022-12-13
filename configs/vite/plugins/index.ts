import { ViteEnv } from "../../../types/global"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { PluginOption } from "vite"
import { configUnocssPlugin } from "./unocss"
import { configHtmlPlugin } from "./html"

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
    // vite-plugin-html
    vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))
    return vitePlugins
}
