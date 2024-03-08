import React from "react"
import {
  Grid,
  Avatar,
  useTheme,
  ThemeProvider,
  createTheme,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  // resetLocalstorage,
  selectCore,
  
} from "../../../../goldlabel"

import {Geo} from "../../../plugins/geo"

import {
  toggleFullScreen,
  ToggleBar,
} from "../"

export function FullScreen() {

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const secondaryColor = useTheme().palette.secondary.main
  const {darkmode} = core
  const {
    dialogOpen,
    ting,
  } = tings
  if (!ting) return null
  const {
    vendor,
    deviceModel,
    deviceType,
    lat,
    lng,
    browser,
    os,
    countryEmoji,
    countryCode,
    displayName,
    countryName,
    city,
    currency,
    // fingerprint,
    docTitle,
  } = ting
  
  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }

  return (<>
            <ThemeProvider 
              theme={createTheme({
                palette: { 
                  mode: darkmode ? "light" : "dark",
                  primary: {
                    main: secondaryColor,
                  },
                  secondary: {
                    main: primaryColor,
                  },
                  background: {
                    paper: primaryColor
                  }}})}>
            <Dialog 
              fullScreen
              open={dialogOpen}
              onClose={closeDialog}>
                <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{width: 800}}>
                  <DialogTitle>
                    <CardHeader 
                      avatar={<Avatar src={`/svg/flags/${countryCode}.svg`}/> }
                      title={<Font variant="title">
                        displayName: {displayName}
                      </Font>}
                      action={<>
                        <IconButton
                          onClick={closeDialog}>
                          <Icon icon="close" />
                        </IconButton>
                      </>
                      }
                    />
                  </DialogTitle>
                  <DialogContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={6}>
                        <Geo defaultCenter={{lat, lng}}/>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{}}>
                          <Font>{city}, {countryName}</Font>
                          {/* <Font>{isp}</Font> */}
                          <Font>{vendor} {deviceModel} {os} {browser} {deviceType} </Font>
                          <Font>{currency}&nbsp;&nbsp;{countryEmoji}</Font>
                        </Box>  
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <ToggleBar />
                </Box>
                <Box sx={{flexGrow:1}} />
              </Box>
          </Dialog>       
        </ThemeProvider>   
      </>
  )
}

/*
<pre>{JSON.stringify(tings.ting, null, 2)}</pre>
*/