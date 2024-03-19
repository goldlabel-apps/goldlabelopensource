import * as React from "react"
import {
  Box,
  Grid,
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
  selectDisplay,
  selectFingerprint,
} from "../../../goldlabel"
import {
  toggleDialog,
  Forget,
  Output,
  DisplayMessages,
  NewMessage,
  DisplayDevice,
} from "../../Fingerprint"
import {
  ThemedIconBtn,
} from "../../Theme"

export default function FingerprintDialog() {
  const dispatch = usePwaDispatch()
  const fingerprint = usePwaSelect(selectFingerprint)
  const display = usePwaSelect(selectDisplay)
  let mobile = true
  if (display) mobile = display.mobile
  const {
    open,
    firstFingerprint,
    // latestFingerprint,
  } = fingerprint

  const closeDialog = () => {
    dispatch(toggleDialog(false))
  }

  return <Dialog 
            open={open}
            maxWidth="lg"
            fullWidth
            fullScreen={mobile}
            onClose={closeDialog}>
          <DialogTitle>
            <CardHeader
              avatar={<Icon icon="fingerprint" color="primary" />} 
              title={<Font>Fingerprint</Font>}
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
            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <Output />
                <DisplayDevice />
              </Grid>
              <Grid item xs={12} md={7}>
                
                <pre>firstFingerprint: 
                  {JSON.stringify(firstFingerprint, null, 2)}
                </pre>
                <DisplayMessages /> 
              </Grid>
              
            </Grid>
            
          </DialogContent>
          <DialogActions>

          <Grid container sx={{mx:1}}>
              <Grid item xs={12} md={5}>
                <Box sx={{m:2}}>
                  <Forget />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{mr:1}}>
                  <NewMessage />
                </Box>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
}
