import React from "react"
import {
  ButtonBase,
  Dialog,
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
} from "./"

export function Tings() {
  const dispatch = usePwaDispatch()
  const tings = usePwaSelect(selectTings)
  // console.log ("tings", tings)


  const openDialog = () => {
    dispatch(toggleTingDialog(true))
  }

  return (<>
          <TingDialog />
          <Box sx={{}}></Box>
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
                  onClick={openDialog}
                >
                  <Box>
                    <Font>
                      Open Ting
                    </Font>
                  </Box>
                </ButtonBase>
              </AppBar>          
        </>
  )
}
