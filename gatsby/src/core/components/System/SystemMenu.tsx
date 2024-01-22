import * as React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Badge,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material"
import {
  Icon,
  Font,
  persistor,
  usePwaSelect,
  usePwaDispatch,
  useSiteMetadata,
  selectCore,
  setCoreKey,
  selectDisplay,
  navigate,
  selectAuth,
  PingPublic,
  firebaseSignout,
} from "../../../core"

export default function SystemMenu() {
  const auth = usePwaSelect(selectAuth)
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const siteMeta = useSiteMetadata()
  const {version} = siteMeta
  let isBig = false
  if (display) isBig = !display.mobile
  const {
    footerMenuOpen, 
    darkmode,
  } = core
  let user: any = null
  if(auth) user = auth.user
  const {
    darkmodeEnabled,
    debuggerEnabled,
  } = glConfig

  const purgeRedux = () => {
    console.log("purgeRedux")
    persistor.pause();
    persistor.flush().then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500)
      return persistor.purge()
    })
  }
  
  return (<>
        <Badge badgeContent={0} color="secondary">
          <IconButton 
            color="inherit"
            aria-label="Open settings"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(setCoreKey("footerMenuOpen", true))
            }}>
            <Icon icon={"settings"} color="primary" />
          </IconButton>
        </Badge>
        
          <Dialog 
            open={footerMenuOpen}
            fullWidth
            maxWidth={"xs"}
            fullScreen ={!isBig}
            onClose={() => {
              dispatch(setCoreKey("footerMenuOpen", false))
            }}>
              
            <DialogTitle>
              <Box sx={{display:"flex"}}>
                <Box sx={{mt:2.5, ml:2}}> 
                  <Font variant="title">
                    Settings
                  </Font>
                </Box>
                <Box sx={{flexGrow:1}}/>
                
                <Box>
                  <IconButton
                    sx={{mt:2}}
                    onClick={() => {
                      dispatch(setCoreKey("footerMenuOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
            
              <List dense>
                

                <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("footerMenuOpen", false))
                      dispatch(navigate("/", "_self"))
                    }}>
                  <ListItemIcon>
                    <Icon icon={"home"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Home
                              </Font> }/>
                  </ListItemButton>

                  

                {darkmodeEnabled ? <>
                  <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("footerMenuOpen", false))
                      dispatch(setCoreKey("darkmode", !darkmode))
                    }}>
                  <ListItemIcon>
                    <Icon icon={darkmode ? "lightmode" : "darkmode"}  color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                {darkmode ? "Light" : "Dark"} mode
                              </Font> }/>
                  </ListItemButton>
                </> : null } 

                <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("footerMenuOpen", false))
                      dispatch(navigate("https://github.com/listingslab-software/open-source", "_blank"))
                    }}>
                  <ListItemIcon>
                    <Icon icon={"github"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Open Source
                              </Font> }/>
                  </ListItemButton>

                { debuggerEnabled ? <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("footerMenuOpen", false))
                      purgeRedux()
                    }}>
                  <ListItemIcon>
                    <Icon icon="bug" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Purge & Restart
                              </Font> }/>
                  </ListItemButton> : null }

                  {auth ? <ListItemButton
                  sx={{mb:1}}
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(setCoreKey("footerMenuOpen", false))
                    dispatch(firebaseSignout())
                  }}>
                <ListItemIcon>
                  <Icon icon={"signout"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font>
                              Sign out
                            </Font> }/>
                </ListItemButton> : null }

              </List>
              
            </DialogContent>

            <DialogActions>
            <PingPublic />
              <Box sx={{flexGrow:1}} />
              <Box sx={{m:1}}>
                <Font variant="small" color="muted">
                  Goldlabel {version}
                </Font>
              </Box>
            </DialogActions>
          </Dialog>
        
        </>)
}

/*

                  */