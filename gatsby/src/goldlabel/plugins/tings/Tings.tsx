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
  Font,
  selectTings,
  selectCore,
} from "../../../goldlabel"
import {
  TingDialog,
  toggleTingDialog,
  initTing,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  const core = usePwaSelect(selectCore)
  const primaryColor = useTheme().palette.primary.main
  const {darkmode} = core
  
  console.log("darkmode", darkmode)

  const {
    status,
    ting,
  } = tings

  React.useEffect(() => {
    if (status === "idle"){
      dispatch(initTing())
    }
  }, [ting, status, dispatch])

  const openDialog = () => {
    dispatch(toggleTingDialog(true))
  }

  return (<>
            <ThemeProvider theme={createTheme({palette: { 
                                  mode: darkmode ? "light" : "dark",
                                  background: {
                                    paper: primaryColor
                                  }
                                }})}>
              <TingDialog />
              <AppBar
                color="inherit"
                position="fixed"
                sx={{ 
                  // border: 0,
                  top: 'auto',
                  // boxShadow: 0,
                  bottom: 0, 
                }}>
                <ButtonBase
                  sx={{p:1}}
                  onClick={openDialog}>
                  <Box>
                    <Font>
                      Open Ting
                    </Font>
                  </Box>
                </ButtonBase>
              </AppBar> 
            </ThemeProvider>        
        </>)
}
