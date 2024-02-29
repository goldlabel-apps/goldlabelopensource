import React from "react"
import {
  ButtonBase,
  AppBar,
  Box,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  Font,
  selectTings,
} from "../../../goldlabel"
import {
  TingDialog,
  toggleTingDialog,
  initTing,
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  
  const {
    status,
    ting,
  } = tings

  React.useEffect(() => {
    if (!ting && status === "idle"){
      // dispatch(initTing())
    }
    
  }, [ting, status, dispatch])


  const openDialog = () => {
    dispatch(toggleTingDialog(true))
  }

  return (<>
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
        </>)
}
