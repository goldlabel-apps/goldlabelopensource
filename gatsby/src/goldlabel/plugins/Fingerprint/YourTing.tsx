import React from "react"
import {
  Box,
  Dialog,
  DialogContent,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectCore,
  selectFingerprint,
} from "../../../goldlabel"
import {
  ForgetMe,
} from "../../plugins/Fingerprint"
import {
  toggleFullScreen,
  ToggleBar,
} from "../Fingerprint"

import {Geo} from "../Geo"

export function YourTing() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const fingerprint = usePwaSelect(selectFingerprint)
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const secondaryColor = useTheme().palette.secondary.main
  const {darkmode} = core
  const {
    dialogOpen,
  } = tings

  const closeDialog = () => {
    dispatch(toggleFullScreen(false))
  }

  return (<>
        <ThemeProvider 
          theme={createTheme({
            palette: { 
              mode: darkmode ? "light" : "dark",
              primary: {
                main: secondaryColor,
              },
              secondary: {
                main: primaryColor,
              },
              background: {
                paper: primaryColor
              }}})}>
            <Dialog 
              fullScreen
              open={dialogOpen}
              onClose={closeDialog}>
                <DialogContent>
                  <Geo />
                  <ForgetMe />
                  <Box sx={{display: "flex"}}>
                    <Box sx={{flexGrow: 1}} />
                    <Box>
                      <ToggleBar />
                    </Box>
                    <Box sx={{flexGrow:1}} />
                  </Box>
                  <pre>fingerprint: {JSON.stringify(fingerprint, null, 2)}</pre>
              </DialogContent>
          </Dialog>       
        </ThemeProvider>   
      </>
  )
}
