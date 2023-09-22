import {ThemeShape} from "../../../types"
import React from "react"
import {goldlabelConfig} from "./../../goldlabelConfig"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  makeTheme,
} from "../../goldlabel"


export default function MuiTheme(props: any) {
  const {
    themes
  } = goldlabelConfig
  const {
    slug,
    font,
    primaryColor,
    secondaryColor,
  } = themes[0]
  const pwa = usePwaSelect(selectPWA)
  const {darkmode} = pwa
  const theme: ThemeShape = {
    slug,
    font,
    primaryColor,
    secondaryColor,
  }
  const {children} = props
  const customTheme = makeTheme(
    darkmode ? "dark" : "light", 
    theme.primaryColor, 
    theme.secondaryColor
  )
  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
      </ThemeProvider>
    </>
  )
}