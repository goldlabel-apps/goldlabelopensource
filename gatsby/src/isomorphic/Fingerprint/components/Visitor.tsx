import * as React from "react"
import { 
  getFirestore,
  onSnapshot,
  doc,
} from "firebase/firestore"
import {
  Box,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  CardHeader,
  Grid,
  DialogActions,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
  selectDisplay,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  NameEditor,
  AvatarEditor,
  forget,
} from "../../Fingerprint"

export default function Visitor() {
  
  const dispatch = usePwaDispatch()
  const fp = usePwaSelect(selectFingerprint)
  const display = usePwaSelect(selectDisplay)
  const {mobile} = display
  const {
    data,
    open,
  } = fp
  const {
    uid,
  } = data

  const forgetMe = () => {
    dispatch(forget())
    closeDialog()
  }

  const closeDialog = () => {
    dispatch(setFingerprintKey("open", false))
  }

  React.useEffect(() => {
    const unsubscribe = onSnapshot(doc(getFirestore(), "fingerprints", uid), (doc) => {
      dispatch(setFingerprintKey("subscribed", doc.data()))
    })
    return () => unsubscribe()
  }, [dispatch, uid])

  return <Dialog 
          open={open}
          fullWidth
          onClose={closeDialog}
          fullScreen={mobile}>
          <DialogTitle>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <CardHeader 
                avatar={<AvatarEditor />}
                title={<NameEditor />}
                action={<>
                <IconButton 
                  sx={{mt:1.5}}
                  color="primary"
                  onClick={closeDialog}  
                >
                  <Icon icon="close" />
                </IconButton>
                </>}
              />
              </Grid>
            </Grid>
          </DialogTitle>
          
          <DialogContent></DialogContent>

          <DialogActions>
          <Button
              sx={{mr:2}}
              onClick={forgetMe}>
                <Box sx={{mr: 1, mt: 0.5}}>
                  <Icon icon="forget" />
                </Box>
                <Box sx={{ml:1}}>
                  <Font>
                    Forget me
                  </Font>
                </Box>
                
            </Button>
          </DialogActions>
          
          
        </Dialog>
}
