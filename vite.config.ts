import { defineConfig, ConfigEnv, loadEnv } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import _ from "lodash"

import svgBuilder from "./src/plugins/SvgBuilder"

const pathResolve = (dir: string): any => {
    return resolve(__dirname, ".", dir)
}
// 根据不同环境 去读取 不同的 对象  进行返回
const envResolve = (mode) => {
    return loadEnv(mode, process.cwd())
}

const getEnv = function (env) {
    //  读取环境名
    return envResolve(_.last(process.argv))[env]
}

const alias: Record<string, string> = {
    "@": pathResolve("./src/")
}

const viteConfig = defineConfig((mode: ConfigEnv) => {
    return {
        base: "./", // 等同于  assetsPublicPath :'./'
        plugins: [vue(), svgBuilder("./src/assets/svg/")],
        resolve: { alias },
        server: {
            proxy: {
                [getEnv("VITE_API_BASE_URL")]: {
                    target: getEnv("VITE_APP_BASE_SERVER"), //实际请求地址
                    changeOrigin: true,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, "")
                }
            }
        },
        css: {
            preprocessorOptions: {
                stylus: {
                    // https://stackoverflow.com/questions/73228198/global-variables-stylus-vue-vite
                    additionalData: `@import "${resolve(__dirname, "src/style/variables.styl")}"`
                }
            }
        },
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: "static/js/[name]-[hash].js",
                    entryFileNames: "static/js/[name]-[hash].js",
                    assetFileNames: "static/[ext]/[name]-[hash].[ext]"
                }
            }
        }
    }
})

// https://vitejs.dev/config/
export default viteConfig
