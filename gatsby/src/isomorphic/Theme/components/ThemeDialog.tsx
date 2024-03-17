import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectTheme,
    selectDisplay,
} from "../../../goldlabel"
import {
  toggleDialog,
  TogglePaletteMode,
  ThemedIconBtn,
} from "../../Theme"

export default function ThemeDialog() {
  const dispatch = usePwaDispatch()
  const theme = usePwaSelect(selectTheme)
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
            <TogglePaletteMode />
            {/* <pre>{JSON.stringify(theme, null, 2)}</pre> */}
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
