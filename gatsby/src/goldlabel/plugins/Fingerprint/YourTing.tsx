import React from "react"
import {
  Grid,
  Dialog,
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
} from "../../plugins/Fingerprint"
import {
  toggleFullScreen,
  ToggleBar,
} from "../Fingerprint"

import {Geo} from "../Geo"
import {Flash} from "../Flash"
import {Lingua} from "../Lingua"

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
              <DialogContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4}>
                    <Geo />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Flash />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Lingua />
                  </Grid>
                </Grid>
                <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre>
                <ForgetMe />
              </DialogContent>
              <DialogActions>
                <ToggleBar />
              </DialogActions>
          </Dialog>       
        </ThemeProvider>   
      </>
  )
}
