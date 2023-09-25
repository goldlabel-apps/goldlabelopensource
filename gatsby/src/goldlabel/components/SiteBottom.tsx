import * as React from "react"
import {
  useTheme,
  AppBar,
  Box,
  Container,
  IconButton,
  Tooltip,
} from "@mui/material"
import {
  toggleSettings,
  Icon,
  TopAppbar,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  selectLocale,
  navigate,
} from "../../goldlabel"
import {getTranslation} from "../../mods/Lingua"

export default function SiteBottom(props: any) {
  const dispatch = usePwaDispatch()
  const {children} = props
  const theme = useTheme()
  const locale = usePwaSelect(selectLocale)

  return (
    <>
      <TopAppbar />
      <Box sx={{ 
        // border: "1px solid red",
        pt: "60px", 
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
                sx={{}}
                onClick={() => {
                  dispatch(toggleSettings(true))
                }}
                color="primary">
                  <Icon icon="settings" />
              </IconButton>
            
            <Box sx={{flexGrow:1}} />
          </Box>
          </Container>
      </AppBar>
    </>
  )
}
