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
  selectDarkMode,
  makeTheme,
} from "../../goldlabel"


export default function MuiTheme(props: any) {
  const {
    theme
  } = goldlabelConfig
  const {
    slug,
    primaryColor,
    secondaryColor,
  } = theme
  const darkmode = usePwaSelect(selectDarkMode)
  const thisTheme: ThemeShape = {
    slug,
    primaryColor,
    secondaryColor,
  }
  const {children} = props
  const customTheme = makeTheme(
    darkmode ? "dark" : "light", 
    thisTheme.primaryColor, 
    thisTheme.secondaryColor
  )
  return (
    <>
      <ThemeProvider theme={createTheme(customTheme)}>
        {children}
      </ThemeProvider>
    </>
  )
}