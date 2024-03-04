import React from "react"
import {
  useTheme,
  ThemeProvider,
  createTheme,
  ButtonBase,
  AppBar,
  Box,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectCore,
} from "../../../goldlabel"
import {
  TingDialog,
  TingDisplay,
  toggleTingDialog,
  initTings,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const secondaryColor = useTheme().palette.secondary.main
  const {darkmode} = core

  const openDialog = () => {
    dispatch(toggleTingDialog(true))
  }

  React.useEffect(() => {
    dispatch(initTings())
  }, [dispatch])

  return <>
          <AppBar
            color="inherit"
            position="fixed"
            sx={{ 
              border: 0, boxShadow: 0,
              top: 'auto',
              bottom: 0, 
            }}>
            <ButtonBase
              sx={{p:1}}
              onClick={openDialog}>
              <Box>
                <TingDisplay />
              </Box>
            </ButtonBase>  
          </AppBar>
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
          <TingDialog />
        </ThemeProvider> 
        </>
}
