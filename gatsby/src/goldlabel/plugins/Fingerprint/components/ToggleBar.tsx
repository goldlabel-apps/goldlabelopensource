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
  Font,
} from "../../../../goldlabel"
import {
    toggleFullScreen,
} from "../"

export function ToggleBar() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const {dialogOpen, ting} = tings
  let str = ""
  if (ting){
    str = ting.displayName
  }

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
              <Box sx={{mt: 0.5, mr: 1}}>
                <Icon icon="ting" color="primary"/> 
              </Box>
              <Box>
                <Font noWrap>
                  {str}
                </Font>
              </Box>
            </ButtonBase>
        </AppBar>
}
