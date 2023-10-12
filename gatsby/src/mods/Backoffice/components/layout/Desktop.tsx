import {goldlabelConfig} from "../../../../goldlabelConfig"
import * as React from "react"
import { useTheme } from "@mui/material/styles"
import {
  Box,
  Toolbar,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectBackoffice,
} from "../../../../goldlabel"
import {
  GameMenu,
  AddDoc,
  ChangeDoc,
  TopRight,
  StyledDrawerHeader,
  StyledDrawer,
  StyledAppBar,
  Collection,
} from "../../../Backoffice"

export default function Desktop() {
    const backoffice = usePwaSelect(selectBackoffice)
    const theme = useTheme()
    const [open, setOpen] = React.useState(true)
    const handleDrawerClose = () => setOpen(false)
    let title: any = "Desktop"
    const {activeCollection} = backoffice
    if(activeCollection){
      title = activeCollection.title
    } else {
      title = "Dashboard"
    }
    return (
      <>
        <Box sx={{ display: "flex" }}>
          
          <StyledAppBar 
            color="default"
            sx={{boxShadow: 0}}
            position="fixed" 
            open={open}>
            <Toolbar>
              <Font>
                {title}
              </Font>
            </Toolbar>
          </StyledAppBar>
          
          <StyledDrawer variant="permanent" open={open}>
            <StyledDrawerHeader>
              <IconButton 
                color="primary"
                onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <Icon icon="right" color="primary"/> : <>
                    <Icon icon="left"/>
                </>}
              </IconButton>
            </StyledDrawerHeader>
            <GameMenu/>
          </StyledDrawer>
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <StyledDrawerHeader />
            <AddDoc />
            <ChangeDoc />
            {/* <pre>activeCollection: {JSON.stringify(activeCollection, null, 2)}</pre> */}
          </Box>
          
        </Box>
      </>
  )
}

/* 

<IconButton
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}>
                <Icon icon="right" color="secondary"/>
              </IconButton>
              
              <Box>
                <TopRight />
              </Box>

*/