import type { UserConfig } from "vite"
import picocolors from "picocolors"
import { loadEnv, mergeConfig } from "vite"
import { readPackageJSON } from "pkg-types"
import { resolveProxy, wrapperEnv } from "./utils"
import { createPreset, PresetType } from "./presets"
import { resolve } from "path"
import dayjs from "dayjs"
import { OUTPUT_DIR } from "./constants"
import { configVitePlugins } from "./plugins"

export async function createViteConfig(
    command: "build" | "serve",
    mode: string,
    cwd: string,
    { preset }: { preset: PresetType }
): Promise<UserConfig> {
    console.log()
    console.log(picocolors.red("当前处于开发测试阶段，还会有大量更新，仅供参考，请勿用于实际项目！\n"))
    console.log()

    const root = cwd
    const env = loadEnv(mode, root)
    const { dependencies, devDependencies, name, version } = await readPackageJSON(cwd)
    // The boolean type read by loadEnv is a string. This function can be converted to boolean type
    const viteEnv = wrapperEnv(env)
    const { VITE_PUBLIC_PATH, VITE_PROXY, VITE_USE_MOCK, VITE_DROP_CONSOLE, VITE_USE_HTTPS } = viteEnv
    const commonConfig: UserConfig = {
        root,
        base: VITE_PUBLIC_PATH,
        resolve: {
            alias: {
                "@": `${resolve(root, "src")}`,
                "~@": `${resolve(root, "src")}`,
                "#": `${resolve(root, "types")}`,
                // layouts: `${resolve(root, '../../packages/layouts/src')}`,
                "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
                vue: "vue/dist/vue.esm-bundler.js"
            }
        },
        define: {
            __VITE_USE_MOCK__: VITE_USE_MOCK,
            // Suppress vue-i18-next warning
            __INTLIFY_PROD_DEVTOOLS__: false,
            __APP_INFO__: JSON.stringify({
                pkg: { dependencies, devDependencies, name, version },
                lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
            })
        },
        server: {
            https: VITE_USE_HTTPS,
            port: 3000,
            host: true,
            proxy: !VITE_USE_HTTPS ? resolveProxy(VITE_PROXY) : undefined
        },
        esbuild: {
            pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
        },
        css: {
            preprocessorOptions: {
                stylus: {
                    // https://stackoverflow.com/questions/73228198/global-variables-stylus-vue-vite
                    additionalData: `@import "${resolve(root, "src/style/variables.styl")}"`
                },
                less: {
                    javascriptEnabled: true,
                    additionalData: `@import "${resolve(root, "src/assets/css/variables.less")}";`
                }
            }
        },
        build: {
            outDir: OUTPUT_DIR,
            reportCompressedSize: false,
            chunkSizeWarningLimit: 2048,
            rollupOptions: {
                output: {
                    manualChunks: {
                        vue: ["vue", "pinia", "vue-router"]
                    }
                }
            }
        },
        optimizeDeps: {
            include: ["dayjs/locale/en", "dayjs/locale/zh-cn", "@iconify/iconify"]
            // exclude: ['vue-demi'],
        },
        plugins: await configVitePlugins(root, viteEnv, command === "build")
    }
    return mergeConfig(commonConfig, await createPreset(preset)())
}
