import React from "react"
// import {glConfig} from "../../config"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {makeTheme} from "../theme/makeTheme"
import {
  usePwaSelect,
  selectCore,
  selectTheme,
} from "../../goldlabel"

export default function Theme({children}: any) {
  const core = usePwaSelect(selectCore)
  const theme = usePwaSelect(selectTheme)
  const {darkmode} = core
  const {
    color,
  } = theme
  const customTheme = makeTheme(
    darkmode ? "dark" : "light", 
    color,
  )
  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
      </ThemeProvider>
    </>
  )
}