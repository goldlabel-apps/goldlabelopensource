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
  let avatarSrc = ""
  if (fingerprint) {
    str = fingerprint.displayName
    avatarSrc = fingerprint.avatarSrc
  }
  const toggleFullscreen = () => {
    dispatch(toggleFullScreen(!dialogOpen))
  }

  return <AppBar
            color="inherit"
            position="fixed"
            sx={{ 
              border: 0,
              
              boxShadow: 0,
              top: 'auto',
              bottom: 0, 
            }}>
              <ButtonBase
                onClick={toggleFullscreen}
              >
                <Box sx={{
                  display: "flex",
                  border: "1px solid " + primaryColor,
                  p: 1,
                  m: 1,
                  borderRadius: 2,
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
