import * as React from "react"
import {
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleCategories,
  toggleSettings,
  scrollUp,
} from "../../"

export default function PWANav() {
  const hideAdd = false
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const {categories, frontmatter, locale} = pwa
  // let homeBtn = true
  // if (isBig && frontmatter) homeBtn = false
  return (
    <>
    <Box sx={{display: "flex", flexGrow:1, maxWidth: 1100, margin:"auto"}}>
       <Box>
          <IconButton 
            sx={{}}
            onClick={() => {
              dispatch(toggleCategories(!categories))
              dispatch(scrollUp())
            }}
            color="primary">
              <Icon icon="menu" color="primary" />
          </IconButton>
        </Box>
        <Box sx={{flexGrow:1}} />
        <Box sx={{}}>
          <IconButton 
            sx={{}}
            onClick={() => {
              dispatch(toggleSettings(true))
            }}
            color="primary">
              <Icon icon="settings" />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}
