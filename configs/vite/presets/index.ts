import { createAntdPreset } from "./antd"

export type PresetType = "antd" | "ele" | "naive"

export function createPreset(framework: PresetType) {
    const presets: Record<string, any> = {
        antd: createAntdPreset
    }
    return presets[framework]
}
