const config = {
    enabled: true,
    toggle: true,
    paletteMode: "dark",
    color: "#C09F52",
    font: "noka",
}

export const themeSlice: any = {
    slug: "theme",
    paletteMode: config.paletteMode,
    font: config.font,
    color: config.color,
}
