import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  boot,
  ListingDesktop,
  ListingMobile,
  Notifyer,
  usePwaDispatch,
  usePwaSelect,
  selectDisplay,
  setFrontmatter,
  WindowResizeListener,
  NotFound,
} from "../core"
import {Pingpong} from "../plugins/Pingpong"

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
            <Pingpong />
            <WindowResizeListener />
            <Notifyer />
            <Container>
              {type === "notfound" ? <NotFound /> : null}
              {type === "markdown" ? <>
                {mobile ? <ListingMobile appData={appData}/> 
                  : <ListingDesktop appData={appData}/> }
              </> : null}
            </Container>
          </Box>)
}
