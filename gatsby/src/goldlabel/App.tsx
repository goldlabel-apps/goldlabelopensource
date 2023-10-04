import React from "react"
import {
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  boot,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  setFrontmatter,
  selectDarkMode,
  toggleDarkmode,
  Notifyer,
  SiteBottom,
  Settings,
  setType,
} from "../goldlabel"
import {Add} from "../mods/Listings"
import {Weather} from "../mods/Weather"

export default function App(props: any) {
  const dispatch = usePwaDispatch()
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("md"))
  const {
    location,
    children,
    appData,
    type,
  } = props
  let frontmatter: any = null
  if (appData.data){
    frontmatter = appData.data.markdownRemark.frontmatter
  }
  const pwa = usePwaSelect(selectPWA)
  const {systemPref} = pwa
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const darkmode = usePwaSelect(selectDarkMode)
  
  React.useEffect(() => {
    dispatch(setFrontmatter(frontmatter))
    dispatch(boot(isBig))
    if (!systemPref && prefersDarkMode !== darkmode){
      dispatch(toggleDarkmode(prefersDarkMode))
    }
    dispatch(setType(type))
  }, [type, isBig, prefersDarkMode, darkmode, systemPref, frontmatter, location, dispatch])

  return (<>
            <Notifyer />
            <Settings />
            <Weather />
            <SiteBottom>       
              {type === "add-listing" ? <Add /> : null }    
              {children}
            </SiteBottom>
          </>)
}
