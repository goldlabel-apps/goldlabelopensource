// import {glConfig} from "../../config"
import React from "react"
import { 
  getFirestore,
  doc,
  onSnapshot,
} from "firebase/firestore"
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
} from "../../goldlabel"
import {
  Controls,
  toggleFullScreen,
  ToggleBar,
  updateFbTing,
} from "../Fingerprint"

export function YourFingerprint() {
  const dispatch = usePwaDispatch()  
  const tings = usePwaSelect(selectTings)

  React.useEffect(() => {
    const {ting} = tings
    if (ting){
      const {fingerprint} = ting
      if (fingerprint){
        const unsubscribe = onSnapshot(
          doc(getFirestore(), "fingerprints", fingerprint), (fp) => {
            dispatch(updateFbTing(fp.data()))
          })
        return () => unsubscribe();
      }
    }
  }, [dispatch, tings])

  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }
  
  const {
    dialogOpen,
  } = tings
  
  return (<>
        <Dialog 
          fullScreen
          open={dialogOpen}
          onClose={closeDialog}>
          <DialogTitle>
            <Controls />
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              
              <Grid item xs={12} md={4}>
                {/* <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> */}
              </Grid>
            </Grid>
            {/*   */}
          </DialogContent>
          <DialogActions>
            <ToggleBar />
          </DialogActions>
        </Dialog>
    </>
  )
}

/* 
<pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre> 
*/