import React from "react"
import {
  Box,
  useTheme,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  TopNav,
} from "../../"
import {getTranslation} from "../../arkdown/translations"

export default function TopAppbar(props:any) {
  const theme = useTheme()
  // const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  // let pageTitle: string = getTranslation("siteTagline", locale)
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa

  return (<>
            <AppBar 
                sx={{
                  border: "1px solid blue",
                  boxShadow: "none", 
                  background: theme.palette.background.default,
                }}>
            <Toolbar>
              <TopNav />
            </Toolbar>
        </AppBar>
      </>)
}
