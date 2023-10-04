import React from "react"
import {
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  TopNav,
} from "../../goldlabel"
// import {getTranslation} from "../../mods/Lingua"

export default function TopAppbar(props:any) {
  // console.log("props", props)
  const theme = useTheme()
  return (<>
            <AppBar 
                sx={{
                  boxShadow: "none", 
                  background: theme.palette.background.default,
                }}>
            <Toolbar>
              <TopNav />
            </Toolbar>
          </AppBar>
        </>)
}
