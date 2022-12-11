import { createViteConfig } from "./configs/vite"
import { defineConfig, UserConfig } from "vite"

export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
    return await createViteConfig(command, mode, process.cwd(), { preset: "antd" })
})
