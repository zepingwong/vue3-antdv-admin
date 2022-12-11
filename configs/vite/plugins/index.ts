import { ViteEnv } from "../../../types"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { PluginOption } from "vite"
export async function configVitePlugins(root: string, viteEnv: ViteEnv, isBuild: boolean) {
    const vitePlugins: (PluginOption | PluginOption[])[] = [
        // have to
        vue({
            reactivityTransform: true
        }),
        // have to
        vueJsx()
    ]
    return vitePlugins
}
