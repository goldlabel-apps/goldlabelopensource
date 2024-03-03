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
  Icon,
  selectCore,
} from "../../../goldlabel"
import {
  TingDialog,
  toggleTingDialog,
  initTings,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const {darkmode} = core

  React.useEffect(() => {
    dispatch(initTings())
  }, [dispatch])

  const openDialog = () => {
    dispatch(toggleTingDialog(true))
  }

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
                <Icon icon="ting" />
              </Box>
            </ButtonBase>
            
          </AppBar> 
          <ThemeProvider 
            theme={createTheme({
              palette: { 
                mode: darkmode ? "light" : "dark",
                background: {
                  paper: primaryColor
                }}})}>
          <TingDialog />
        </ThemeProvider> 
        </>
}
