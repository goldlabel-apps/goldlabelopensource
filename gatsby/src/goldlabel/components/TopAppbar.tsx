import React from "react"
import {
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  TopNav,
} from "../../goldlabel"
import {getTranslation} from "../../mods/Lingua"

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
