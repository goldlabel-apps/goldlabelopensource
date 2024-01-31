import { PaletteMode, lighten, darken } from "@mui/material"

export function makeTheme(
  mode: PaletteMode,
  primary: string,
  secondary: string,
) {
  return {
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
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
        default: mode === "dark" ? darken(primary, 0.9): lighten(primary, 1),
        paper: mode === "dark" ? darken(primary, 0.9): lighten(primary, 1),
      },
    },
  }
}
