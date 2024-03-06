import React from "react"
import {
  ButtonBase,
  Box,
  AppBar,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  Icon,
} from "../../../../goldlabel"
import {
    Display,
    toggleFullScreen,
} from "../"

export function ToggleBar() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {dialogOpen} = tings
  
  const toggleFullscreen = () => {
    dispatch(toggleFullScreen(!dialogOpen))
  }

  return <AppBar
            color="inherit"
            position="fixed"
            sx={{ 
              border: 0, boxShadow: 0,
              top: 'auto',
              bottom: 0, 
            }}>
              <ButtonBase
                sx={{p:1}}
                onClick={toggleFullscreen}>
              <Box>
                <Icon icon="ting" />
              </Box>
              <Box>
                <Display />
              </Box>
            </ButtonBase>
        </AppBar>
}
