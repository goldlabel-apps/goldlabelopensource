import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
} from "../../../../goldlabel"
import {
  ForgetMe,
  toggleFullScreen,
} from "../../Fingerprint"

export default function Controls() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {ting} = tings
  if (!ting) return null
  // console.log("ting", ting)
  
  const {
    displayName,
  } = ting
  
  const closeFingerprint = () => {
    dispatch(toggleFullScreen(false))
    return true
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        color="inherit"
        sx={{
          background: "none",
          boxShadow: "none"
        }}>
        <Toolbar>
          <Font variant="title" noWrap>
            {displayName}
          </Font>
          
          <Box sx={{}}>
            <ForgetMe mode="icon"/>
          </Box>
          <Box sx={{}}>
          
            <IconButton
              onClick={closeFingerprint}
              color="primary">
              <Icon icon="close" />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
