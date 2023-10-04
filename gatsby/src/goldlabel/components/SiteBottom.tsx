import * as React from "react"
import {
  useTheme,
  AppBar,
  Box,
  Container,
  IconButton,
} from "@mui/material"
import {
  toggleSettings,
  Icon,
  TopAppbar,
  usePwaDispatch,
} from "../../goldlabel"
import {WeatherButton} from "../../mods/Weather"

export default function SiteBottom(props: any) {
  const dispatch = usePwaDispatch()
  const {children} = props
  const theme = useTheme()

  return (
    <>
      <TopAppbar />
        <Box sx={{ 
          // border: "1px solid red",
          pt: "65px", 
          pb:"60px" 
        }}>
          <div id="scrollIntoView" />
          {children}
        </Box>
      <AppBar 
        color={"primary"}
        position="fixed"
        sx={{ 
          // border: "1px solid green",
          top: "auto", 
          bottom: 0,
          boxShadow: "none",
          background: theme.palette.background.paper,
        }}>
          <Container maxWidth="md">
          <Box sx={{display: "flex"}}>
            <Box sx={{flexGrow:1}} />
              <IconButton 
                color="primary"
                sx={{mb:1}}
                onClick={() => {
                  dispatch(toggleSettings(true))
                }}>
                  <Icon icon="menu"/>
              </IconButton>
            <Box sx={{flexGrow:1}} />
          </Box>
        </Container>
      </AppBar>
    </>
  )
}
