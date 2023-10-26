import React from "react"
import {glConfig} from "../../config"
import {ThemeShape} from "../types"
import {
  createTheme,
  ThemeProvider,
} from "@mui/material"
import {makeTheme} from "../theme/makeTheme"

export default function Theme(props: any) {
  const darkmode = false
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