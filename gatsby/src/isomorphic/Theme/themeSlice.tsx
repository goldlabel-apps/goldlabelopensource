const config = {
    enabled: true,
    toggle: true,
    paletteMode: "dark",
    color: "#26474c",
    font: "noka",
}

export const themeSlice: any = {
    slug: "theme",
    paletteMode: config.paletteMode,
    font: config.font,
    color: config.color,
}
