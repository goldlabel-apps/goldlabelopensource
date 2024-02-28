import React from "react"
import {
  ButtonBase,
  AppBar,
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  
} from "../../../goldlabel"
// import {
//   Public
// } from "./"

export function Tings() {

  

  return (<>

          <Box sx={{}}></Box>

          <AppBar 
            position="fixed"
            sx={{ 
              border: 0,
              boxShadow: 0,
              top: 'auto', 
              bottom: 0, 
            }}>
              <ButtonBase>
                Your Ting
              </ButtonBase>
              
            </AppBar>
          
        </>
  )
}
