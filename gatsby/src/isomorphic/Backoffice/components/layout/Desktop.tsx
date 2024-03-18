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
  StyledDrawerHeader,
  StyledDrawer,
  StyledAppBar,
  
} from "../../../Backoffice"
import {Fingerprints} from "../../../../core"

export default function Desktop() {
    const backoffice = usePwaSelect(selectBackoffice)
    const theme = useTheme()
    const [open, setOpen] = React.useState(true)
    const handleDrawerClose = () => setOpen(false)
    let title: any = "Dashboard"
    const {activeCollection} = backoffice
    if(activeCollection){
      title = activeCollection.title
    }
    let collectionName: any = null
    if (activeCollection) collectionName = activeCollection.collectionName
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
            {collectionName === "fingerprints" ? <Fingerprints /> : null } 
            
            {/* <Collection /> */}
          </Box>
          
        </Box>
      </>
  )
}