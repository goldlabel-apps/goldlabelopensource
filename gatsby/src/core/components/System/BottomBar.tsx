import * as React from "react"
import {
  useTheme,
  Box,
  IconButton,
  Badge,
  AppBar,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  setCoreKey,
  selectCore,
  ScrollUp,
  SystemMenu,
  Pingpong,
} from "../../../core"

export default function BottomBar() {
  const dispatch = usePwaDispatch()
  const bgCol = useTheme().palette.background.default
  const core = usePwaSelect(selectCore)
  const {darkmode, scroll} = core

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
                <Box>
                  <Pingpong />
                </Box>
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


/*
*/