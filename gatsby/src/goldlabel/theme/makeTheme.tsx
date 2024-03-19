import {glConfig} from "../../config"
import { 
  PaletteMode, 
} from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
) {
  return {
    palette: {
      mode,
      primary: {
        main: mode === "light" ? primary : glConfig.siteTheme,
      },
      secondary: {
        main: mode === "light" ? glConfig.siteTheme : primary,
      },
      success: {
        main: mode === "light" ? primary : glConfig.siteTheme,
      },
    },
  }
}
