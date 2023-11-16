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
} from "../../../core"

export default function FooterMenu() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const siteMeta = useSiteMetadata()
  const {version, siteTitle, siteDescription} = siteMeta
  let isBig = false
  if (display) isBig = !display.mobile
  const {footerMenuOpen, darkmode} = core
  // console.log("isBig", isBig)

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
              subheader={<Font variant="small">
                  {siteDescription}
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
              </List>
            </DialogContent>

            <DialogActions>
              <Box sx={{flexGrow:1}} />
              <Box sx={{m:1}}>
                <Font variant="small" color="muted">
                  {version}
                </Font>
              </Box>
            </DialogActions>
          </Dialog>
        
        </>)
}
