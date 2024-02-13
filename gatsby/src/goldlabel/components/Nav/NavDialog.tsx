import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  Navigator,
  usePwaSelect,
  selectCore,
  usePwaDispatch,
  selectDisplay,
  setCoreKey,
} from "../../../goldlabel"

export default function NavDialog() {
  const dispatch = usePwaDispatch()
  const display = usePwaSelect(selectDisplay)
  const core = usePwaSelect(selectCore)
  const {navDialogOpen} = core
  
  let isBig = false
  if (display) isBig = !display.mobile
  
  return <>
          <Dialog 
            open={navDialogOpen}
            fullWidth
            maxWidth={"xs"}
            fullScreen ={!isBig}
            onClose={() => {
              dispatch(setCoreKey("navDialogOpen", false))
            }}>
              <DialogTitle>
                <Box sx={{display:"flex"}}>
                  <Box sx={{mt:2.5, ml:2}}> 
                    <Font variant="title">
                      Navigation
                    </Font>
                  </Box>
                  <Box sx={{flexGrow:1}}/>
                  <Box>
                    <IconButton
                      sx={{mt:2}}
                      onClick={() => {
                        dispatch(setCoreKey("navDialogOpen", false))
                      }}>
                      <Icon icon={"close"} color="primary"/>
                    </IconButton>
                  </Box>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Navigator /> 
              </DialogContent>
            </Dialog>
          </>
}
