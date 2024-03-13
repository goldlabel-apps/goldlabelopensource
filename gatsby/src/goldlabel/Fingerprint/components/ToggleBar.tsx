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
              borderTop: "1px solid " + primaryColor,
              boxShadow: 0,
              top: 'auto',
              bottom: 0, 
            }}>
              <ButtonBase
                sx={{p:1}}
                // onClick={toggleFullscreen}
              >
              <Box sx={{mt: 0.5, mr: 1.5}}>
                <Avatar
                  sx={{width: 24, height: 24}}
                  src={avatarSrc} 
                  alt={str}
                />
              </Box>
              <Box sx={{mt: 0.5}}>
                <Font noWrap>
                  {str}
                </Font>
              </Box>
            </ButtonBase>
        </AppBar>
}
