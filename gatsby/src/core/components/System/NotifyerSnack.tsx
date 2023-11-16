import * as React from 'react'
import {
  Snackbar,
  Alert,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectNotifyer,
  setPwaKey,
  notifyCancel,
  selectCore,
} from "../../../core"

export default function NotifyerSnack() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {notifyer} = core
  if( !notifyer) return null

  let { severity, message, code } = notifyer;
  if ( typeof message !== "string") return null
  
  const closeSnackbar = () =>  dispatch(notifyCancel())

  return (
    <Snackbar
      open
      anchorOrigin={{ 
        vertical:"bottom", 
        horizontal:"center" 
      }}
      autoHideDuration={3500}
      onClose={ closeSnackbar }
    >
      <Alert 
        variant="filled"
        onClose={ closeSnackbar } 
        severity={ severity }>
          <Font color="white">{ message }</Font>
      </Alert>
    </Snackbar>
  )
}
