import React from "react"
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  Avatar,
  Tooltip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CardHeader,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  ResetBtn,
} from "../../../../goldlabel"
import {Iconify} from "../../../plugins/fingerprints"
// import {Geo} from "../../../plugins/geo"

import {
  toggleFullScreen,
  ToggleBar,
} from "../"

export function FullScreen() {

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  // const core = usePwaSelect(selectCore)
  // const primaryColor = useTheme().palette.primary.main
  // const secondaryColor = useTheme().palette.secondary.main
  // const {darkmode} = core
  const {
    dialogOpen,
    ting,
  } = tings
  if (!ting) return null
  const {
    vendor,
    deviceModel,
    browser,
    os,
    countryCode,
    siteAvatar,
    countryName,
    city,
    displayName,
  } = ting
  
  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }

  let displayNameStr = ""
  if (displayName) displayNameStr = displayName

  return (<>
            {/* <ThemeProvider 
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
                  }}})}> */}
            <Dialog 
              fullScreen
              open={dialogOpen}
              onClose={closeDialog}>
                <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{width: 800}}>
                  <DialogTitle>
                    <Box sx={{ flexGrow: 1 }}>
                      <AppBar 
                        color="secondary" 
                        position="static"
                        sx={{boxShadow: "none"}} 
                      >
                        <Toolbar>
                          {/* <Avatar
                            sx={{mr:2}} 
                            src={siteAvatar}/> */}
                          
                          <Font>
                            
                          </Font>
                          
                          <ResetBtn />
                          <Tooltip title={<Font color="white">Close</Font>}>
                            <IconButton
                              color="primary"
                              edge="end"
                              aria-label="close"
                              onClick={closeDialog}
                            >
                              <Icon icon="close" />
                            </IconButton>
                          </Tooltip>
                        </Toolbar>
                      </AppBar>
                    </Box>
                  </DialogTitle>
                  
                  <DialogContent>
                    <Grid container spacing={1}>
                                          
                      <Grid item xs={12} md={5}>
                        {/* <Geo /> */}
                        <CardHeader 
                          avatar={<Avatar src={`/svg/flags/${countryCode}.svg`}/> }
                          title={<Font variant="title">{city}</Font>}
                          subheader={<Font variant="small">{countryName}</Font>}
                        />
                          
                          <List dense>
                            <ListItem>
                              <ListItemIcon>
                                  <Iconify needle={deviceModel} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={<Font>{vendor} {deviceModel}</Font>}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                  <Iconify needle={os} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={<Font>{os}</Font>}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                  <Iconify needle={browser} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={<Font>{browser}</Font>}
                              />
                            </ListItem>

                            

                          </List>
    
                      </Grid>

                      <Grid item xs={12} md={7}>
                        <Box sx={{mt:2}}>
                          <Font variant="small">
                            We don't use cookies. They are old-fashioned. While they have been a fundamental part of web development for many years and continue to serve important functions, there are some considerations that might lead developers to explore alternative approaches or supplementary technologies
                          </Font>
                        </Box>
                        <ResetBtn mode="forgetMe"/>
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <ToggleBar />
                </Box>
                <Box sx={{flexGrow:1}} />
              </Box>
          </Dialog>       
        {/* </ThemeProvider>    */}
      </>
  )
}

/*
<pre>{JSON.stringify(tings.ting, null, 2)}</pre>
*/