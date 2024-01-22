import { PaletteMode, lighten, darken } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string,
) {
  return {
    palette: {
      mode,
      primary: {
        main: mode === "light" ? primary : secondary,
      },
      secondary: {
        main: mode === "light" ? secondary : primary,
      },
      success: {
        main: mode === "light" ? secondary : primary,
      },
      info: {
        main: mode === "light" ? primary : secondary,
      },
      background: {
        default: mode === "dark" ? darken(primary, 0.8): lighten(primary, 0.95),
        paper: mode === "dark" ? darken(primary, 0.8): lighten(primary, 0.95),
      },
    },
  }
}
