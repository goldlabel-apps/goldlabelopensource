import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  boot,
  Signup,
  ListingDesktop,
  ListingMobile,
  Notifyer,
  usePwaDispatch,
  usePwaSelect,
  selectDisplay,
  setFrontmatter,
  WindowResizeListener,
} from "../core"

export default function App(props: any) {
  const dispatch = usePwaDispatch()
  const d = usePwaSelect(selectDisplay)
  let mobile = true
  if (d) mobile = d.mobile
  const {
    appData,
    type,
  } = props
  let frontmatter: any = null
  if (appData.pageResources.json.data){
    frontmatter = appData.pageResources.json.data.markdownRemark.frontmatter
  }

  React.useEffect(() => {
    dispatch(boot())
    dispatch(setFrontmatter(frontmatter))
  }, [frontmatter, dispatch])

  return (<Box>
            <WindowResizeListener />
            <Notifyer />
            <Container>
              {type === "signup" ? <>
                <Signup />
              </> : null}
              {type === "markdown" ? <>
                {mobile ? <ListingMobile appData={appData}/> 
                  : <ListingDesktop appData={appData}/> }
              </> : null}
            </Container>
          </Box>)
}
