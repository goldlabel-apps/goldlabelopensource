import React from "react"
import {
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
    deviceVendor,
    deviceModel,
    deviceType,
    lat,
    lng,
    browser,
    os,
    countryEmoji,
    countryCode,
    isp,
    countryName,
    city,
    currency,
    fingerprint,
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
                        {`Hello Dave`}
                      </Font>}
                      subheader={<Font variant="small">
                                  {city}, {countryName}
                                </Font>}
                      action={<>
                          {/* <IconButton
                            onClick={() => {
                              console.log("GDPR", fingerprint)
                              // dispatch(resetLocalstorage())
                            }}>
                            <Icon icon="reset" />
                          </IconButton> */}
                        <IconButton
                          onClick={closeDialog}>
                          <Icon icon="close" />
                        </IconButton>
                      </>
                      }
                    />
                  </DialogTitle>
                  <DialogContent>
                    <Box sx={{mx:1}}>
                      <Font variant="title">
                        {docTitle}
                      </Font>
                        <Font>{deviceVendor} {deviceModel} {os} {browser} {deviceType} </Font>
 
                      
                        <Font>{isp}</Font>
                        <Font>lat: {lat} lng: {lng}</Font>
                        
                        <Font>{isp} {currency}&nbsp;&nbsp;{countryEmoji}</Font>
                    </Box>  
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