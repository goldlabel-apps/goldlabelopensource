import * as React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
  navigate,
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
                <Box sx={{ml: 1}}>
                  <List dense>
                    <ListItemButton
                      onClick={() => {
                        dispatch(navigate("/", "_self"))
                        dispatch(setCoreKey("navDialogOpen", false))
                      }}>
                      <ListItemIcon>
                        <Icon icon="home" color="primary"/>
                      </ListItemIcon>
                      <ListItemText 
                        primary={<Font variant="small">Home</Font>}
                      />
                    </ListItemButton>
                  </List>
                </Box>
                <Navigator /> 
              </DialogContent>
            </Dialog>
          </>
}
