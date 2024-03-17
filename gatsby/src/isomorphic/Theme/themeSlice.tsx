import {glConfig} from "../../config"

export const themeSlice: any = {
    slug: "theme",
    open: false,
    paletteMode: glConfig.isomorphic.theme.paletteMode,
    font: glConfig.isomorphic.theme.font,
    color: glConfig.isomorphic.theme.color,
}
