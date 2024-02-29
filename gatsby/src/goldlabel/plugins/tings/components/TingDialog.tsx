import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
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
              onClose={closeDialog}
            >
              <DialogTitle>
                <Font>
                  Ting Dialog
                </Font>
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


/*

<Box sx={{ display: "flex"}}>
            <Box sx={{flexGrow:1}}/>
            <Box sx={{m:0}}>
              
            </Box>
            <Box sx={{m:1}}>
              <Font>
                fingerprint...
              </Font>
            </Box>
          </Box>

          */