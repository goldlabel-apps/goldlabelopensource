import * as React from "react"
import {
  Box,
  IconButton,
  Container,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  toggleCategories,
  scrollUp,
  selectCategories,
  selectType,
  CatNav,
  ShareMenu,
  navigate,
} from "../../goldlabel"
import {fadeDiv} from "../../mods/Flash"

export default function TopNav() {

  const type = usePwaSelect(selectType)
  const dispatch = usePwaDispatch()
  const categories = usePwaSelect(selectCategories)
  let showMenuToggle = true
  if (type !== "markdown") showMenuToggle = false 
  return <Box sx={{display: "block", width: "100%", maxWidth:880, margin: "auto"}}>
            <Box sx={{display: "flex"}}>
              {showMenuToggle ? <Box>
                <IconButton
                  onClick={() => {
                    dispatch(toggleCategories(!categories))
                    dispatch(scrollUp())
                  }}>
                  <Icon icon={categories ? "menu-up" : "menu-down" } color="primary"/>
                </IconButton>
              </Box> : <IconButton
                  onClick={() => {
                    dispatch(fadeDiv("listings"))
                    dispatch(navigate("/", "_self"))
                  }}>
                  <Icon icon={"home" } color="primary"/>
                </IconButton> }
              
              <Box sx={{flexGrow:1}} />
              <Box sx={{}}>
                <CatNav />
              </Box>
              
              <Box sx={{mr:1.5}}>
                <ShareMenu />
              </Box>
            </Box>
          </Box>
}
