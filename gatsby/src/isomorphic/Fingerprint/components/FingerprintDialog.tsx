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
  // Tooltip,
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
} from "../../Fingerprint"

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
            />
          </DialogTitle>
          <DialogContent>
            <pre>{JSON.stringify(fingerprint, null, 2)}</pre>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="outlined"
              onClick={closeDialog}>
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
