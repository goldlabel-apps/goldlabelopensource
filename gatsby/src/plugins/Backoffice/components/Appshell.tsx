import * as React from "react"
import {
  useTheme,
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Container,
  Grid,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  navigate,
  ScrollUp,
  useSiteMetadata,
  Font,
  DarkmodeToggle,
  selectBackoffice,
  BottomBar,
} from "../../../core"
import {
  CollectionSelect,
} from "../../Backoffice"

export default function Appshell() {
  const dispatch = usePwaDispatch()
  const siteMeta = useSiteMetadata()
  const backoffice = usePwaSelect(selectBackoffice)
  const {collection, fbId} = backoffice
  const {
    version,
  } = siteMeta
  const bgCol = useTheme().palette.background.default

  return (
    <React.Fragment>
      <div id="topAnchor" />
      
      <Container>
        <Grid container spacing={1}>
          {/* <Grid item xs={12} md={!collection ? 12 : 3}>
            <CollectionSelect />
          </Grid> */}
          <Grid item xs={12}>
            {collection === "pingpong" ? <>Pingpong</> : null }
          </Grid>
        </Grid>  
        
      </Container>
      
      <BottomBar />
    </React.Fragment>
  )
}
