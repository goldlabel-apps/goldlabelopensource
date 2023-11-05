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
      background: {
        // default: lighten(secondary, 0.99),
        // paper: lighten(secondary, 0.95),
      },
    },
  }
}
