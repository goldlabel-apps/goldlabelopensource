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
} from "../../../core"
import {
  CollectionSelect,
  Pingpong,
  Members,
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
          <Grid item xs={12} md={!collection ? 12 : 3}>
            <CollectionSelect />
          </Grid>
          <Grid item xs={12} md={9}>
            {collection === "pingpong" ? <Pingpong /> : null }
            {collection === "members" ? <Members /> : null }
          </Grid>
        </Grid>  
      </Container>

      <AppBar 
        position="fixed" 
        color="inherit" 
        sx={{ 
          top: "auto", 
          bottom: 0,
          background: bgCol,
        }}>

              <Toolbar>
                <Container maxWidth="md">               
                  <Box sx={{display: "flex"}}>
                    <Box sx={{m:1.5}}>
                        <Font variant="small" color="muted">
                          {version}
                        </Font>
                    </Box>
                    <Box>
                    <IconButton 
                      color="primary"
                      aria-label="home"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                        dispatch(navigate("/", "_self"))
                      }}>
                      <Icon icon="home" />
                    </IconButton>
                      <DarkmodeToggle />
                    </Box>
                    <Box sx={{flexGrow: 1}} />
                    <Box>
                      <ScrollUp />
                    </Box>
                  </Box>
                </Container> 
              </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
