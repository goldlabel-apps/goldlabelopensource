import * as React from "react"
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
  toggleSettings,
  selectLocale,
  selectDarkMode,
  toggleDarkmode,
  // resetRedux,
  navigate,
} from "../../goldlabel"
import {fadeDiv} from "../../mods/Flash"
import { getTranslation } from "../../mods/Lingua"
import { firebaseSignout } from "../Auth"

export default function SettingsMenu() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const darkmode = usePwaSelect(selectDarkMode)
  const locale = usePwaSelect(selectLocale)
  let lightStr: string = getTranslation("LIGHTMODE", locale)
  let darkStr: string = getTranslation("DARKMODE", locale)
  let resetStr: string = getTranslation("RESET", locale)
  const {frontmatter} = pwa
  let homeBtn = true
  if (frontmatter) homeBtn = false

  return <List dense>

            <ListItemButton
              onClick={(e:React.MouseEvent) => {
                e.preventDefault()
                dispatch(navigate("/", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon="home" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                            {getTranslation("HOME", locale)}
                          </Font>}
              />
            </ListItemButton>

            <ListItemButton
              onClick={(e:React.MouseEvent) => {
                e.preventDefault()
                dispatch(toggleSettings(false))
                dispatch(fadeDiv("listings"))
                dispatch(navigate("/backoffice", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon="backoffice" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                          {getTranslation("BACKOFFICE", locale)}
                          </Font>}
              />
            </ListItemButton>
              
            

            <ListItemButton
              onClick={(e:React.MouseEvent) => {
                e.preventDefault()
                dispatch(toggleSettings(false))
                dispatch(fadeDiv("listings"))
                dispatch(navigate("/sitemap", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon="site" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                          {getTranslation("SITEMAP", locale)}
                          </Font>}
              />
            </ListItemButton>
                
            
            <ListItemButton
              onClick={() => {
                dispatch(toggleSettings(false))
                dispatch(toggleDarkmode(!darkmode))
              }}>
              <ListItemIcon>
                <Icon icon={darkmode ? "light" : "dark"} color="primary"/>
              </ListItemIcon>
              <ListItemText 
                primary={<Font variant="small">{!darkmode ? darkStr : lightStr}</Font>}
              />
            </ListItemButton>

          </List>
}
