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
  selectAuth,
  usePwaDispatch,
} from "../../../core"

export default function BottomBar() {
  const dispatch = usePwaDispatch()
  const bgCol = useTheme().palette.background.default
  const core = usePwaSelect(selectCore)
  const auth = usePwaSelect(selectAuth)
  let user: any = null
  if(auth) user = auth.user
  const {scroll} = core
  const showMenu = true

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
                
                { showMenu ? <Box sx={{}}>
                  <SystemMenu />
                </Box> : null}

                
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