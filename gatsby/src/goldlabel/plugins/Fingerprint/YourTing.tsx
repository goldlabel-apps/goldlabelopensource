import React from "react"
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectCore,
  selectFingerprint,
} from "../../../goldlabel"
import {
  ForgetMe,
  Controls,
  toggleFullScreen,
  ToggleBar,
} from "../../plugins/Fingerprint"

import {Geo} from "../Geo"
import {Flash} from "../Flash"
import {Lingua} from "../Lingua"
import {Forms} from "../Forms"

export function YourTing() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const fingerprint = usePwaSelect(selectFingerprint)
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const secondaryColor = useTheme().palette.secondary.main
  const {darkmode} = core
  const {
    dialogOpen,
  } = tings

  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }

  return (<>
    <ThemeProvider 
      theme={createTheme({
        palette: { 
          mode: darkmode ? "light" : "dark",
          primary: {
            main: secondaryColor,
          },
          secondary: {
            main: primaryColor,
          },
          background: {
            paper: primaryColor
          }}})}>
        <Dialog 
          fullScreen
          open={dialogOpen}
          onClose={closeDialog}>
            <DialogTitle>
              <Controls />
            </DialogTitle>

            <DialogContent>
              <Grid container spacing={1}>
                <Grid item xs={12} md={8}>
                  <Forms />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Lingua />
                  <Geo />
                  <Flash />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <ToggleBar />
            </DialogActions>
        </Dialog>       
      </ThemeProvider>   
    </>
  )
}

/* 
<pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> 
*/