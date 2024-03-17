import { PaletteColor } from "@mui/material"
import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CardHeader,
  Box,
  Tooltip,
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
} from "../../Theme"

export default function ThemeDialog() {
  const dispatch = usePwaDispatch()
  const theme = usePwaSelect(selectTheme)
  const display = usePwaSelect(selectDisplay)
  const {mobile} = display
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
            <pre>{JSON.stringify(theme, null, 2)}</pre>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="contained"
              color="inherit"
              onClick={closeThemeDialog}>
                <Box sx={{mt:0.25}}>
                  <Font variant="small">Close</Font>
                </Box>
                <Box sx={{ml: 1, mt:0.5}}>
                  <Icon icon="close" />
                </Box>
            </Button>
          </DialogActions>
        </Dialog>
}
