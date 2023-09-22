import * as React from "react"
import {
  useTheme,
  AppBar,
  Box,
  Link,
  Container,
} from "@mui/material"
import {
  Font,
  TopAppbar,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  navigate,
} from "../../"
import {getTranslation} from "../../translations"

export default function SiteBottom(props: any) {
  const dispatch = usePwaDispatch()
  const {children} = props
  const theme = useTheme()
  const linkColor = theme.palette.text.secondary
  const pwa = usePwaSelect(selectPWA)
  const {locale} = pwa
  const showFooterText = true

  return (
    <>
      <TopAppbar />
      <Box sx={{ 
        border: "1px solid red",
        pt: "60px", 
        pb:"60px" 
      }}>
        <div id="scrollIntoView" />
        {children}
      </Box>
      <AppBar 
        color={"primary"}
        position="fixed"
        sx={{ 
          border: "1px solid green",
          top: "auto", 
          bottom: 0,
          boxShadow: "none",
          background: theme.palette.background.paper,
        }}>
          <Container maxWidth="lg">
          <Box sx={{display: "flex"}}>
            
            {showFooterText ? <Box sx={{}}>
              <Font variant="small">
                <Link 
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(navigate("https://github.com/listingslab-software/open-source", "_blank"))
                  }}
                  sx={{
                    cursor: "pointer", 
                    textDecoration: "none",
                    color: linkColor,
                  }}>
                { getTranslation("FOOTER", locale) }
                </Link>
              </Font>
            </Box> : null}
            <Box sx={{flexGrow:1}} />
          </Box>
          </Container>
      </AppBar>
    </>
  )
}
