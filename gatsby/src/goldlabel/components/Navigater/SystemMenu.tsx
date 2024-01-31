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
  Tooltip,
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
  firebaseSignout,
} from "../../../goldlabel"

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
    settingsMenuOpen, 
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
        <Tooltip title={<Font color="white">
          Settings
        </Font>}>
          <Badge badgeContent={0}>
            <IconButton 
              color="inherit"
              aria-label="Open settings"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(setCoreKey("settingsMenuOpen", true))
              }}>
              <Icon icon={"settings"} color="primary" />
            </IconButton>
          </Badge>
          </Tooltip>
          <Dialog 
            open={settingsMenuOpen}
            fullWidth
            maxWidth={"xs"}
            fullScreen ={!isBig}
            onClose={() => {
              dispatch(setCoreKey("settingsMenuOpen", false))
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
                      dispatch(setCoreKey("settingsMenuOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
            
              <List dense>
              
                {darkmodeEnabled ? <>
                  <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("settingsMenuOpen", false))
                      dispatch(setCoreKey("darkmode", !darkmode))
                    }}>
                  <ListItemIcon>
                    <Icon icon={darkmode ? "lightmode" : "darkmode"}  color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                {darkmode ? "Light" : "Dark"}
                              </Font> }/>
                  </ListItemButton>
                </> : null } 

                

                { debuggerEnabled ? <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("settingsMenuOpen", false))
                      purgeRedux()
                    }}>
                  <ListItemIcon>
                    <Icon icon="bug" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Reset
                              </Font> }/>
                  </ListItemButton> : null }

                  {auth ? <ListItemButton
                  sx={{mb:1}}
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(setCoreKey("settingsMenuOpen", false))
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