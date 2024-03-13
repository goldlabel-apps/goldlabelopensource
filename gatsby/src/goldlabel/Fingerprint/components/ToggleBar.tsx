import React from "react"
import {
  useTheme,
  ButtonBase,
  Box,
  AppBar,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectFingerprint,
  Icon,
  Font,
} from "../../../goldlabel"
import {
    toggleFullScreen,
} from "../"

export function ToggleBar() {
  const primaryColor = useTheme().palette.primary.main
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const fingerprint = usePwaSelect(selectFingerprint)
  const {dialogOpen, ting} = tings
  let str = ""
  if (fingerprint) str = fingerprint.displayName
  
  const toggleFullscreen = () => {
    dispatch(toggleFullScreen(!dialogOpen))
  }

  return <AppBar
            color="inherit"
            position="fixed"
            sx={{ 
              border: 0,
              borderTop: "1px solid " + primaryColor,
              boxShadow: 0,
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
