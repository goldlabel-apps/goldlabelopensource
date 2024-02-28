import React from "react"
import {
  AppBar,
  Box,
} from "@mui/material"
// import {
//   Font,
//   Icon,
// } from "../../../goldlabel"
import {
  Public
} from "./"

export function Tings() {

  

  return (<>
          <Box sx={{}}>

          <AppBar 
            position="fixed"
            sx={{ 
              border: 0,
              boxShadow: 0,
              top: 'auto', 
              bottom: 0, 
            }}>
              <Public />
            </AppBar>
          </Box>
        </>
  )
}
