import {glConfig} from "../../../config"
import * as React from "react"
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  // DialogActions,
  CardHeader,
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
  let mobile = true
  if (display) mobile = display.mobile
  const {open} = flash
  const {isomorphic} = glConfig
  const flashConfig = isomorphic.flash
  
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
              action={<Box sx={{mt: 0.5}}>
              <ThemedIconBtn 
                onClick={closeDialog}
                label="Close"
                icon="close"
                variant="text"
              />
            </Box>}
            />
          </DialogTitle>
          <DialogContent>
            <pre>flashConfig: {JSON.stringify(flashConfig, null, 2)}</pre>
          </DialogContent>
          {/* <DialogActions>
            <ThemedIconBtn 
              onClick={closeDialog}
              label="Close"
              icon="close"
            /> 
          </DialogActions> */}
        </Dialog>
}
