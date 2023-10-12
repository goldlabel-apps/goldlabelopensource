import React from "react"
import {
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  boot,
  usePwaSelect,
  usePwaDispatch,
  selectCategories,
  setFrontmatter,
  selectDarkMode,
  selectSystemPref,
  toggleCategories,
  Notifyer,
  SiteBottom,
  Settings,
  setType,
} from "../goldlabel"
import {Geolocator} from "../mods/Geolocator"

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
  const systemPref = usePwaSelect(selectSystemPref)
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const darkmode = usePwaSelect(selectDarkMode)
  const menuOpen = usePwaSelect(selectCategories)

  React.useEffect(() => {
    dispatch(setFrontmatter(frontmatter))
    dispatch(boot(isBig))
    // if (!systemPref && prefersDarkMode !== darkmode){
    //   dispatch(toggleDarkmode(prefersDarkMode))
    // }
    dispatch(setType(type))
    if (!menuOpen && window.location.pathname === "/" && isBig){
      dispatch(toggleCategories(true))
    }
  }, [
    type, 
    isBig, 
    // prefersDarkMode, 
    darkmode, 
    systemPref, 
    frontmatter, 
    location, 
    menuOpen,
    dispatch,
  ])

  return (<>
            <Notifyer />
            <Settings />
            
            <SiteBottom>
              {children}
              <Geolocator />
            </SiteBottom>
          </>)
}
