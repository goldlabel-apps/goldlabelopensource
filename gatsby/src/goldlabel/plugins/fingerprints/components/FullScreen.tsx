import React from "react"
import {
  useTheme,
  ThemeProvider,
  createTheme,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CardHeader,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectTings,
  resetLocalstorage,
  selectCore,
} from "../../../../goldlabel"
import {
  toggleFullScreen,
  ToggleBar,
} from "../"

export function FullScreen() {

  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
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
                <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{width: 800}}>
                  <DialogTitle>
                    <CardHeader 
                      avatar={<IconButton
                        onClick={() => {dispatch(resetLocalstorage())}}>
                        <Icon icon="reset" />
                      </IconButton>
                      }
                    />
                  </DialogTitle>
                  <DialogContent>  
                    Here
                  </DialogContent>
                  <ToggleBar />
                  <pre>{JSON.stringify(tings.ting, null, 2)}</pre>
                </Box>
                <Box sx={{flexGrow:1}} />
              </Box>
        </Dialog>       
        </ThemeProvider>   
      </>
  )
}

/*

*/