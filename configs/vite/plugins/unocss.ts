/**
 * The instant on-demand atomic CSS engine.
 * @see https://github.com/unocss/unocss
 */

import Unocss from "unocss/vite"
import { presetIcons, presetMini } from "unocss"

export const configUnocssPlugin = () => {
    return Unocss({
        exclude: ["node_modules", ".git", "dist"],
        presets: [presetIcons(), presetMini({ dark: "class" })],
        shortcuts: {
            "flex-center": "flex justify-center items-center"
        },
        theme: {
            colors: {
                primary: "var(--ant-primary-color)"
            },
            backgroundColor: {},
            transitionProperty: []
        },
        rules: [
            [
                /^text-(.*)$/,
                ([, c], { theme }) => {
                    if (theme.colors[c]) return { color: theme.colors[c] }
                }
            ]
        ]
    })
}
