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
  toggleSettings,
  selectLocale,
  selectDarkMode,
  toggleDarkmode,
  fadeDiv,
  selectAuth,
  navigate,
  firebaseSignout,
  getTranslation,
} from "../../goldlabel"

export default function SettingsMenu() {
  const dispatch = usePwaDispatch()
  const auth = usePwaSelect(selectAuth)
  const {user} = auth
  let isSignedIn = false
  if (user){
    isSignedIn = true
  }
  const darkmode = usePwaSelect(selectDarkMode)
  const locale = usePwaSelect(selectLocale)
  let lightStr: string = getTranslation("LIGHTMODE", locale)
  let darkStr: string = getTranslation("DARKMODE", locale)

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
                dispatch(navigate("/account", "_self"))
              }}>
              <ListItemIcon>
                <Icon icon="user" color="primary"/>
              </ListItemIcon>
              <ListItemText
                primary={<Font variant="small">
                          {getTranslation("YOUR_ACCOUNT", locale)}
                          </Font>}
              />
            </ListItemButton>

            <ListItemButton
              onClick={(e:React.MouseEvent) => {
                e.preventDefault()
                dispatch(toggleSettings(false))
                dispatch(fadeDiv("listings"))
                dispatch(navigate(isSignedIn ? "/backoffice" : "/account", "_self"))
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

            {isSignedIn ? <>
              <ListItemButton
                onClick={() => {
                  dispatch(firebaseSignout())
                }}>
                <ListItemIcon>
                  <Icon icon="exit"/>
                </ListItemIcon>
                <ListItemText 
                  primary={<Font variant="small">Sign out</Font>}
                />
              </ListItemButton>
            </> : null }

          </List>
}
