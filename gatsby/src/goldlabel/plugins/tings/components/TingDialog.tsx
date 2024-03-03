import React from "react"
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Tooltip,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  navigate,
  resetLocalstorage,
} from "../../../../goldlabel"
import {
  toggleTingDialog,
} from "../"

export function TingDialog() {

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {
    dialogOpen,
  } = tings

  const closeDialog = () => {
    dispatch(toggleTingDialog(false))
  }

  return (<>
            <Dialog 
              fullScreen
              open={dialogOpen}
              onClose={closeDialog}>
              <DialogTitle>
                <CardHeader 
                  // title={<Font>
                  //   Tings
                  // </Font>}
                  avatar={<IconButton
                    onClick={closeDialog}>
                    <Icon icon="ting" />
                  </IconButton>}
                  action={<IconButton
                    onClick={() => {dispatch(resetLocalstorage())}}>
                    <Icon icon="reset" />
                  </IconButton>
                  }
                  
                />
              </DialogTitle>
              
              <DialogContent>  
                <pre>
                  {JSON.stringify(tings, null, 2)}
                </pre>
              </DialogContent>

              <DialogActions>
                <Tooltip title={<Font>Close Ting</Font>}>
                  <IconButton
                    color="inherit"
                    onClick={closeDialog}>
                    <Icon icon="close" />
                  </IconButton>
                </Tooltip>
              </DialogActions>
            </Dialog>          
        </>
  )
}
