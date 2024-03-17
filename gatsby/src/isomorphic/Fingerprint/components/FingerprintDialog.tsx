
import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  Box,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaSelect,
    usePwaDispatch,
    selectDisplay,
    selectFingerprint,
} from "../../../goldlabel"
import {
  toggleDialog,
  Forget,
} from "../../Fingerprint"
import {
  ThemedIconBtn,
} from "../../Theme"

export default function FingerprintDialog() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const display = usePwaSelect(selectDisplay)
  const {mobile} = display
  const {open} = fingerprint

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
              avatar={<Icon icon="fingerprint" color="primary" />} 
              title={<Font>Fingerprint</Font>}
              action={<ThemedIconBtn 
                onClick={closeDialog}
                label="Close"
                icon="close"
                variant="text"
              /> }
            />
          </DialogTitle>
          <DialogContent>
            
            {/* <pre>{JSON.stringify(fingerprint, null, 2)}</pre> */}
          </DialogContent>
          <DialogActions>
            <Forget /> 
            
          </DialogActions>
        </Dialog>
}
