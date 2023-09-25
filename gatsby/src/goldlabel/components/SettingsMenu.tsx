import * as React from "react"
import {
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
  resetRedux,
  navigate,
} from "../../goldlabel"
import { getTranslation } from "../../mods/Lingua"

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

  return (<>
              
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

              <ListItemButton
                onClick={() => {
                  dispatch(resetRedux())
                }}>
                <ListItemIcon>
                  <Icon icon="refresh" color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font variant="small">{resetStr}</Font>}
                />
              </ListItemButton>

              <ListItemButton
                onClick={(e:React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(navigate("https://github.com/listingslab-software/open-source", "_blank"))
                }}>
                <ListItemIcon>
                  <Icon icon="github" color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font variant="small">{getTranslation("FOOTER", locale)}</Font>}
                />
              </ListItemButton>

              <ListItemButton
                onClick={(e:React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(toggleSettings(false))
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

          </>
  )
}
