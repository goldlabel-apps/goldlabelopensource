import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  boot,
  Tings,
  ListingDesktop,
  ListingMobile,
  Notifyer,
  usePwaDispatch,
  setFrontmatter,
  useDisplay,
} from "../core"

export default function App(props: any) {
  const dispatch = usePwaDispatch()
  const display = useDisplay()
  const {mobile} = display
  const {
    appData,
  } = props
  let frontmatter: any = null
  if (appData.pageResources.json.data){
    frontmatter = appData.pageResources.json.data.markdownRemark.frontmatter
  }

  React.useEffect(() => {
    dispatch(boot())
    dispatch(setFrontmatter(frontmatter))
  }, [frontmatter, display, dispatch])

  return (<Box>
            <Tings />
            <Notifyer />
            <Container>
              {mobile ? <ListingMobile appData={appData}/> 
              : <ListingDesktop appData={appData}/> }
            </Container>
          </Box>)
}
