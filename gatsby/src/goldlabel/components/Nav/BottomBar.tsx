import * as React from "react"
import {
  useTheme,
  Box,
  AppBar,

} from "@mui/material"
import {
  usePwaSelect,
  selectCore,
  ScrollUp,
  SystemMenu,
  usePwaDispatch,
  selectDisplay,
  // setCoreKey,
  // Icon,
  // Font,
} from "../../../goldlabel"

export default function BottomBar() {
  const dispatch = usePwaDispatch()
  const display = usePwaSelect(selectDisplay)
  const bgCol = useTheme().palette.background.default
  const core = usePwaSelect(selectCore)
  const {scroll} = core
  let isBig = false
  if (display) isBig = !display.mobile

  return <>
          <AppBar 
            position="fixed" 
            color="inherit" 
            sx={{ 
              background: bgCol,
              boxShadow:0,
              border: 0,
              top: 'auto', 
              bottom: 0, 
            }}>      
              <Box sx={{display: "flex"}}>
                <Box sx={{flexGrow: 1}} />

                <Box sx={{}}>
                  <SystemMenu />
                </Box>

                

                {scroll ? <Box>
                  <ScrollUp />
                </Box> : null }
                
                <Box sx={{flexGrow: 1}} />
              </Box>
            </AppBar>
          </>
}
