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
  Dashboard,
  Sidebar,
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
    const handleDrawerOpen = () => setOpen(true)
    const handleDrawerClose = () => setOpen(false)
    let appShellTitle: any = "Backoffice"
    let content: any = null
    const {collection} = backoffice
    if (!collection) {
      appShellTitle = "Backoffice Dashboard"
      content = <Dashboard />
    } else {
      appShellTitle = collection
      content = <Collection />
    }  
    const {collections} = goldlabelConfig.features.backoffice
    for(let i=0; i<collections.length; i++){
      if (collections[i] === collection) {
        appShellTitle = `Backoffice ${collection}`
      }
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
              <IconButton
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}>
                <Icon icon="right" color="secondary"/>
              </IconButton>
              <Font variant="title">
                {appShellTitle}
              </Font>
              <Box>
                <TopRight />
              </Box>
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
            <Sidebar open={open}/>
          </StyledDrawer>
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <StyledDrawerHeader />
            <AddDoc />
            <ChangeDoc />
            {content}
          </Box>
          
        </Box>
      </>
  )
}

/* 
<pre>{JSON.stringify(backoffice, null, 2)}</pre>
*/