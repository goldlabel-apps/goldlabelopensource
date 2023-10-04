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
  resetRedux,
  navigate,
} from "../../goldlabel"
import {fadeDiv} from "../../mods/Flash"
import { getTranslation } from "../../mods/Lingua"
import { 
  flyToLocation,
  toggleWeather,
} from "../../mods/Weather"

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
            <List dense>
              {/* <ListItemButton
                onClick={(e:React.MouseEvent) => {
                  e.preventDefault()
                  dispatch(toggleSettings(false))
                  dispatch(toggleWeather(true))
                  dispatch(flyToLocation(null))
                }}>
                <ListItemIcon>
                  <Icon icon="map" color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font variant="small">
                            {getTranslation("SWITCH_MAP", locale)}
                            </Font>}
                />
              </ListItemButton> */}
              <ListItemButton
                  onClick={(e:React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(toggleSettings(false))
                    dispatch(fadeDiv("listings"))
                    dispatch(navigate("/add", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon="add" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">
                              {getTranslation("ADD_LISTING", locale)}
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

                <ListItemButton
                  onClick={(e:React.MouseEvent) => {
                    e.preventDefault()
                    dispatch(navigate("https://github.com/listingslab-software/open-source", "_blank"))
                  }}>
                  <ListItemIcon>
                    <Icon icon="github" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">{getTranslation("GITHUB", locale)}</Font>}
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
                    dispatch(resetRedux())
                  }}>
                  <ListItemIcon>
                    <Icon icon="refresh" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">{resetStr}</Font>}
                  />
                </ListItemButton>
              </List>
          </>
  )
}
