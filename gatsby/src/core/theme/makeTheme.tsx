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
        main: mode === "light" ? primary : secondary,
        // main: primary,
      },
      secondary: {
        main: mode === "light" ? secondary : primary,
        // main: secondary,
      },
      // success: {
      //   main: mode === "light" ? secondary : primary,
      // },
      // info: {
      //   main: mode === "light" ? primary : secondary,
      // },
      background: {
        // default: lighten(secondary, 0.99),
        // paper: lighten(secondary, 0.95),
      },
    },
  }
}
