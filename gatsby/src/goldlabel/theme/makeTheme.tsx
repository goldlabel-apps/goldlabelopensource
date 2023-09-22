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
      // background: {
      //   default: "#fcfcfc", //"#fcfcfc",
      // },
      secondary: {
        main: secondary,
      },
      success: {
        main: primary,
      },
      info: {
        main: "#C09F52",
      },
    },
  }
}
