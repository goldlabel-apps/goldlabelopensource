import React from "react"
import {
  Box,
  Dialog,
  ThemeProvider,
  createTheme,
  useTheme,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  selectCore,
} from "../../../../goldlabel"
import {
  ForgetMe,
} from "../../../plugins/Fingerprint"
import {
  toggleFullScreen,
  ToggleBar,
} from "../"

export function YourTing() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const secondaryColor = useTheme().palette.secondary.main
  const {darkmode} = core
  const {
    dialogOpen,
    fbTing,
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
              <ForgetMe />
              <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />
                <Box>
                  <ToggleBar />
                </Box>
                <Box sx={{flexGrow:1}} />
              </Box>
              <pre>fbTing: {JSON.stringify(fbTing, null, 2)}</pre>
          </Dialog>       
        </ThemeProvider>   
      </>
  )
}

/*
<pre>{JSON.stringify(tings.ting, null, 2)}</pre>
*/