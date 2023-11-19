import * as React from "react"
import {
  Box,
  CardHeader,
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
  usePwaSelect,
  usePwaDispatch,
  useSiteMetadata,
  selectCore,
  setCoreKey,
  selectDisplay,
  navigate,
  firebaseSignout,
  selectAuth,
} from "../../../core"

export default function SystemMenu() {
  const auth = usePwaSelect(selectAuth)
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const siteMeta = useSiteMetadata()
  const {version, siteTitle} = siteMeta
  let isBig = false
  if (display) isBig = !display.mobile
  const {footerMenuOpen, darkmode} = core
  let user: any = null
  if(auth) user = auth.user

  return (<>
          <IconButton 
            color="inherit"
            aria-label="Scroll Top"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(setCoreKey("footerMenuOpen", true))
            }}>
            <Icon icon={"menu"} color="primary" />
          </IconButton>
        
          <Dialog 
            open={footerMenuOpen}
            fullWidth
            maxWidth={"xs"}
            fullScreen={!isBig}
            onClose={() => {
              dispatch(setCoreKey("footerMenuOpen", false))
            }}>
              
            <DialogTitle>
              <CardHeader 
                action={<IconButton
                  sx={{m:1}}
                  onClick={() => {
                    dispatch(setCoreKey("footerMenuOpen", false))
                  }}>
                  <Icon icon={"close"} color="primary"/>
                </IconButton>}
                title={<Font variant="title">
                    {siteTitle}
                </Font>}
              
              />
            </DialogTitle>
            <DialogContent>
              <List>

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


                <ListItemButton
                  sx={{mb:1}}
                  color="primary"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(setCoreKey("footerMenuOpen", false))
                    dispatch(navigate("/backoffice", "_self"))
                  }}>
                <ListItemIcon>
                  <Icon icon={"backoffice"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font>
                              Backoffice
                            </Font> }/>
                </ListItemButton>

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
                              {darkmode ? "Light mode" : "Dark mode"}
                            </Font> }/>
                </ListItemButton>


                {user ? <>
                  <ListItemButton
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
