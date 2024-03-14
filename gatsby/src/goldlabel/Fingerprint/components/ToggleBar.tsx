import React from "react"
import {
  useTheme,
  ButtonBase,
  Box,
  AppBar,
  Avatar,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectFingerprint,
  Font,
} from "../../../goldlabel"
import {
    toggleFullScreen,
} from "../"

export function ToggleBar() {
  const borderColor = useTheme().palette.text.disabled
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const fingerprint = usePwaSelect(selectFingerprint)
  const {dialogOpen} = tings
  let str = ""
  let avatarSrc = ""
  
  if (fingerprint) {
    str = fingerprint.displayName
    avatarSrc = fingerprint.avatarSrc
  }

  const toggleFullscreen = () => {
    dispatch(toggleFullScreen(!dialogOpen))
  }

  if (!fingerprint) return null
  return <AppBar
            color="inherit"
            position="fixed"
            sx={{ 
              border: 0,
              background: "none",
              boxShadow: 0,
              top: 'auto',
              bottom: 0, 
            }}>
              <ButtonBase
                onClick={toggleFullscreen}
              >
                <Box sx={{
                  display: "flex",
                  borderRadius: 2,
                  border: "1px solid " + borderColor,
                  p: 0.75,
                  m: 1,
                  pl: 2,
                  pr: 1,
                  
                }}>
                  <Box sx={{mr: 1.5}}>
                    <Font variant="title" noWrap>
                      {str}
                    </Font>
                  </Box>
                  <Box sx={{
                    mt: 0.1,      
                  }}>
                    <Avatar
                      sx={{width: 24, height: 24}}
                      src={avatarSrc} 
                      alt={str}
                    />
                  </Box>
              </Box>
            </ButtonBase>
        </AppBar>
}
