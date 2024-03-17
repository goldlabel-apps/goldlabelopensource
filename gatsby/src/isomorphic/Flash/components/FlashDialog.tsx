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
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectDisplay,
    selectFlash,
} from "../../../goldlabel"
import {
  toggleDialog,
} from "../../Flash"
import {
  ThemedIconBtn,
} from "../../Theme"

export default function FlashDialog() {
  const dispatch = usePwaDispatch()
  const flash = usePwaSelect(selectFlash)
  const display = usePwaSelect(selectDisplay)
  const {mobile} = display
  const {open} = flash

  const closeDialog = () => {
    dispatch(toggleDialog(false))
  }

  return <Dialog 
            open={open}
            fullWidth
            fullScreen={mobile}
            onClose={closeDialog}>
          <DialogTitle>
            <CardHeader
              avatar={<Icon icon="flash" color="primary" />} 
              title={<Font>Flash</Font>}
            />
          </DialogTitle>
          <DialogContent>
            {/* <pre>{JSON.stringify(flash, null, 2)}</pre> */}
          </DialogContent>
          <DialogActions>
            <ThemedIconBtn 
              onClick={closeDialog}
              label="Close"
              icon="close"
            /> 
          </DialogActions>
        </Dialog>
}
