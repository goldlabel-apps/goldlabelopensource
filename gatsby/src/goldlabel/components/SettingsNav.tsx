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
  navigate,
  selectDarkMode,
  toggleDarkmode,
  resetRedux,
} from "../../"
import {hideDiv} from "../packages/Flash"
import {firebaseSignout} from "../packages/Auth"
import { getTranslation } from "../../translations"

export default function SettingsNav() {
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
            {/* <ListItemButton
              onClick={() => {
                dispatch(toggleSettings(false))
                dispatch(hideDiv("listings"))
                dispatch(navigate("/", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon={"home"} color="primary"/>
              </ListItemIcon>
              <ListItemText 
                primary={<Font variant="small">{getTranslation("HOME", locale)}</Font>}
              />
            </ListItemButton> */}

                <ListItemButton
                  onClick={() => {
                    dispatch(toggleSettings(false))
                    dispatch(hideDiv("listings"))
                    dispatch(navigate("/tings", "_self"))
                  }}>
                  <ListItemIcon>
                    <Icon icon="tings" color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font variant="small">
                                Tings
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
          </>
  )
}
