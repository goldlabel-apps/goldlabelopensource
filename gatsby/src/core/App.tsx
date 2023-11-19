import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  boot,
  ListingDesktop,
  ListingMobile,
  NotifyerSnack,
  usePwaDispatch,
  usePwaSelect,
  setCoreKey,
  selectDisplay,
  selectCore,
  setFrontmatter,
  WindowResizeListener,
  NotFound,
} from "../core"
import {Backoffice} from "../plugins/Backoffice"

export default function App(props: any) {
  const {
    appData,
    type,
  } = props
  const dispatch = usePwaDispatch()
  const d = usePwaSelect(selectDisplay)
  const core = usePwaSelect(selectCore)
  let mobile = true
  const {scroll} = core
  const onScroll = () => {
    if (!scroll) dispatch(setCoreKey("scroll", true))
  }
  if (d) mobile = d.mobile
  let frontmatter: any = null
  if (appData.pageResources.json.data){
    frontmatter = appData.pageResources.json.data.markdownRemark.frontmatter
  }

  React.useEffect(() => {
    dispatch(setCoreKey("scroll", false))
    dispatch(boot())
    dispatch(setFrontmatter(frontmatter))
  }, [frontmatter, dispatch])

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])


  return (<Box>
            <WindowResizeListener />
            <NotifyerSnack />
            <Container>
              {type === "notfound" ? <NotFound /> : null}
              {type === "backoffice" ? <Backoffice /> : null}
              {type === "markdown" ? <>
                {mobile ? <ListingMobile appData={appData}/> 
                  : <ListingDesktop appData={appData}/> }
              </> : null}
            </Container>
          </Box>)
}
