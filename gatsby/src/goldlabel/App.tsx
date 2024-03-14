import React from "react"
import {
  Box,
  Container,
} from "@mui/material"
import {
  boot,
  Desktop,
  Mobile,
  NotifyerSnack,
  usePwaDispatch,
  usePwaSelect,
  setCoreKey,
  selectDisplay,
  selectCore,
  setFrontmatter,
  WindowResizeListener,
  NotFound,
  Signin,
  AuthedDialog,
  PasswordOnly,
  selectAuth,
  NavDialog,
} from "../goldlabel"

export default function App(props: any) {
  const {
    appData,
    type,
  } = props
  const dispatch = usePwaDispatch()
  const d = usePwaSelect(selectDisplay)
  
  const auth = usePwaSelect(selectAuth)
  const core = usePwaSelect(selectCore)
  let frontmatter: any = null
  let passwordOnly: boolean = false
  let mobile: boolean = true
  let user: any = null
  if(auth){
    user = auth.user
  }
  const {scroll} = core
  const onScroll = () => {
    if (!scroll) dispatch(setCoreKey("scroll", true))
  }
  if (d) mobile = d.mobile
  if (appData.pageResources.json.data){
    frontmatter = appData.pageResources.json.data.markdownRemark.frontmatter
    passwordOnly = appData.pageResources.json.data.markdownRemark.frontmatter.password
  }
  
  React.useEffect(() => {
    dispatch(boot())
    dispatch(setCoreKey("scroll", false))
    dispatch(setFrontmatter(frontmatter))
  }, [frontmatter, dispatch])

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (type === "notfound") return <NotFound />
  return (<Box>
            <WindowResizeListener />
            <NotifyerSnack />
            <Signin />
            <AuthedDialog />
            <NavDialog />
            <Container>
              {type === "markdown" ? <>
                  {passwordOnly ? <>
                    {!user ? <PasswordOnly frontmatter={frontmatter} /> : <>
                      { mobile ? <Mobile type={type} appData={appData} /> 
                      : <Desktop type={type} appData={appData} /> }
                    </> }
                  </> : <>
                  { mobile ? <Mobile type={type} appData={appData} /> 
                    : <Desktop type={type} appData={appData} /> }
                    </> }
                </> : <>
                  { mobile ? <Mobile type={type} appData={appData} /> 
                    : <Desktop type={type} appData={appData} /> }
                    </>}
            </Container>
          </Box>)
}