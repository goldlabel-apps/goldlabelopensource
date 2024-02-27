import React from "react"
import {
  AppBar,
  Box,
  Container,
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
            color="inherit" 
            sx={{ 
              border: 0,
              boxShadow: 0,
              top: 'auto', 
              bottom: 0, 
            }}>      
              <Container maxWidth={"md"}>
                <Public />
              </Container>
            </AppBar>
          </Box>
        </>
  )
}
