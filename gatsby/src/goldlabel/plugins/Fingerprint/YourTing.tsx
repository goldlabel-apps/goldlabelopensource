import React from "react"
import { 
  getFirestore,
  doc,
  onSnapshot,
} from "firebase/firestore"
import {glConfig} from "../../../config"
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
  Controls,
  toggleFullScreen,
  ToggleBar,
  updateFbTing,
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
  const {
    formsDefault,
    flashDefault,
    linguaDefault,
    geoDefault,
  } = glConfig


  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }
  
  React.useEffect(() => {

    const db = getFirestore()
    const unsubscribe = onSnapshot(
          doc(db, "fingerprints", tings.ting.fingerprint), (fp) => {
            dispatch(updateFbTing(fp.data()))
          })
    return () => unsubscribe();
  }, [dispatch, tings])

  return (<>
    <ThemeProvider 
      theme={createTheme({
        palette: { 
          mode: darkmode ? "light" : "dark",
          primary: { main: secondaryColor},
          secondary: { main: primaryColor },
          background: { paper: primaryColor}}})}>
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
                {formsDefault ? <Forms /> : null }
              </Grid>
              <Grid item xs={12} md={4}>
                { linguaDefault ? <Lingua /> : null }
                { geoDefault ? <Geo /> : null }
                { flashDefault ? <Flash /> : null }
              </Grid>
            </Grid>
            <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> 
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