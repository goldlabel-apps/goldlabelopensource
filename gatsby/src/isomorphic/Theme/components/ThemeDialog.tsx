import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectTheme,
    selectDisplay,
    selectCore,
    setCoreKey,
} from "../../../goldlabel"
import {
  toggleDialog,
  ThemedIconBtn,
} from "../../Theme"
import {
  PickColor,
} from "../../Forms"

export default function ThemeDialog() {
  const dispatch = usePwaDispatch()
  const theme = usePwaSelect(selectTheme)
  const core = usePwaSelect(selectCore)
  const {darkmode} = core
  const display = usePwaSelect(selectDisplay)
  let mobile = true
  if (display) mobile = display.mobile
  const {open} = theme

  const closeThemeDialog = () => {
    dispatch(toggleDialog(false))
  }

  return <Dialog 
            open={open}
            fullWidth
            fullScreen={mobile}
            onClose={closeThemeDialog}
          >
          <DialogTitle>
            <CardHeader
              avatar={<Icon icon="theme" color="primary" />} 
              title={<Font>Theme</Font>}
            />
          </DialogTitle>
          <DialogContent>
            
            <List>
              <ListItemButton
                aria-label="Palette mode"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(setCoreKey("darkmode", !darkmode))
                }}>
                <ListItemIcon>
                  <Icon icon={darkmode ? "lightmode" : "darkmode"} />
                </ListItemIcon>
                <ListItemText 
                  primary={<Font>{darkmode ? "Switch to light mode" 
                  : "Switch to dark mode"}</Font>}
                />
              </ListItemButton>
            </List>
            
            <PickColor />
          </DialogContent>

          <DialogActions>
            <ThemedIconBtn 
              onClick={closeThemeDialog}
              label="Close"
              icon="close"
            />
          </DialogActions>
        </Dialog>
}

/* 
<pre>{JSON.stringify(theme, null, 2)}</pre> 
*/