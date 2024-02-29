import React from "react"
import {
  ButtonBase,
  AppBar,
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  Font,
  selectTings,
} from "../../../goldlabel"

export function Tings() {

  const tings = usePwaSelect(selectTings)
  
  // console.log ("tings", tings)

  const openYourTing = () => {
    console.log ("openYourTing")
  }

  return (<>
          <Box sx={{}}></Box>
            <AppBar 
              color="inherit"
              position="fixed"
              sx={{ 
                top: 'auto',
                border: 0,
                boxShadow: 0,
                bottom: 0, 
              }}>
                <ButtonBase
                  sx={{p:2}}
                  onClick={openYourTing}
                >
                  <Box>
                    <Font>
                      Open Your Ting
                    </Font>
                  </Box>
                </ButtonBase>
              </AppBar>          
        </>
  )
}
