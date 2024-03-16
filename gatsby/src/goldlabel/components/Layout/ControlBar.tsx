import * as React from 'react'
import {
  AppBar,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectFingerprint,
} from "../../../goldlabel"
import {
  toggleFullScreen,
} from "../../../isomorphic/Fingerprint"

export default function Controls() {
  const dispatch = usePwaDispatch()
  const closeFingerprint = () => {
    dispatch(toggleFullScreen(false))
  }

  const fingerprint = usePwaSelect(selectFingerprint)
  if (!fingerprint) return null
  
  return <AppBar 
            position="static" 
            color="inherit"
            sx={{
              background: "none",
              boxShadow: "none"
            }}>
              <CardHeader 
                action={<>
                  <IconButton onClick={closeFingerprint}
                    color="primary">
                    <Icon icon="close" />
                  </IconButton>
                </>}
              />
          </AppBar>
}
