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
} from "../../goldlabel"

export default function TopNav() {
  const type = usePwaSelect(selectType)
  const dispatch = usePwaDispatch()
  const categories = usePwaSelect(selectCategories)
  let showHome = false
  if (type !== "markdown") showHome = true 
  return (
    <Box sx={{display: "block", width: "100%", maxWidth:880, margin: "auto"}}>
            <Box sx={{display: "flex"}}>
              <Box>
                <IconButton
                  onClick={() => {
                    dispatch(toggleCategories(!categories))
                    dispatch(scrollUp())
                  }}>
                  <Icon icon={categories ? "menu-up" : "menu-down" } color="primary"/>
                </IconButton>
              </Box>
              <Box sx={{flexGrow:1}} />
              <Box sx={{}}>
                <CatNav />
              </Box>
              <Box sx={{mr:1}}>
                <ShareMenu />
              </Box>
            </Box>
            </Box>
    )
}
