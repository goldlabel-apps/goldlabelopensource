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
  selectPWA,
  toggleCategories,
  scrollUp,
} from "../../goldlabel"

export default function TopNav() {
  const hideAdd = false
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {categories} = pwa
  return (<>
        <Container maxWidth="md">
          <Box sx={{display: "flex", flexGrow:1}}>
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
        </Container>
    </>
  )
}
