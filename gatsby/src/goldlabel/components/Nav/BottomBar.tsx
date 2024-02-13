import * as React from "react"
import {
  useTheme,
  Box,
  AppBar,
  Tooltip,
  Badge,
  IconButton,
} from "@mui/material"
import {
  usePwaSelect,
  selectCore,
  ScrollUp,
  SystemMenu,
  selectAuth,
  usePwaDispatch,
  selectDisplay,
  setCoreKey,
  Icon,
  Font,
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

                <Box sx={{}}>
                  <Tooltip title={<Font color="white">
                    Menu
                  </Font>}>
                    <Badge badgeContent={0}>
                      <IconButton 
                        color="inherit"
                        aria-label="Open Menu"
                        onClick={(e: React.MouseEvent) => {
                          e.preventDefault()
                          dispatch(setCoreKey("navDialogOpen", true))
                        }}>
                        <Icon icon={"menu"} color="primary" />
                      </IconButton>
                    </Badge>
                  </Tooltip>
                </Box>

                {scroll ? <Box>
                  <ScrollUp />
                </Box> : null }
                
                <Box sx={{flexGrow: 1}} />
              </Box>
            </AppBar>
          </>
}
