import { PaletteMode } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string,
) {
  return {
    palette: {
      mode,
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      success: {
        main: primary,
      },
      info: {
        main: primary,
      },
      action: {
        active: mode === "dark" ? primary : secondary,
      },
    },
  }
}
