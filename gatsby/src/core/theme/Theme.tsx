import React from "react"
import {glConfig} from "../../config"
import {ThemeShape} from "../types"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {makeTheme} from "../theme/makeTheme"
import {
  usePwaSelect,
  selectCore,
} from "../../core"

export default function Theme({children}: any) {
  const core = usePwaSelect(selectCore)
  const {darkmode} = core
  const {
    theme
  } = glConfig
  const {
    slug,
    primaryColor,
    secondaryColor,
  } = theme
  
  const thisTheme: ThemeShape = {
    slug,
    primaryColor,
    secondaryColor,
  }
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