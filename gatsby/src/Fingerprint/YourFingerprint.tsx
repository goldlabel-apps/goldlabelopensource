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
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectFingerprint,
  ControlBar,
} from "../goldlabel"
import {
  toggleFullScreen,
  ToggleBar,
  updateFingerprint,
} from "../Fingerprint"

export function YourFingerprint() {
  const dispatch = usePwaDispatch()  
  const tings = usePwaSelect(selectTings)
  const fingerprint = usePwaSelect(selectFingerprint)

  React.useEffect(() => {
    const {ting} = tings
    if (ting){
      const {fingerprint} = ting
      if (fingerprint){
        const unsubscribe = onSnapshot(
          doc(getFirestore(), "fingerprints", fingerprint), (fp) => {
            dispatch(updateFingerprint(fp.data()))
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
            <ControlBar />
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>              
              <Grid item xs={12} md={4}>
                <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre>
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
