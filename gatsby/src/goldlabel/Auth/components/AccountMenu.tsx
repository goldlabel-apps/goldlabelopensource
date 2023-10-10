import React from "react"
import {
  ListItemText,
  ListItemIcon,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material"
import {
  Icon,
  Font,
  getTranslation,
  notify,
  usePwaDispatch,
  usePwaSelect,
  selectLocale,
  navigate,
  firebaseSignout,
  selectAuth,
} from "../../../goldlabel"

export function AccountMenu() {
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  const auth = usePwaSelect(selectAuth)
  const {user} = auth
  let isSignedIn = false
  if (user){
    isSignedIn = true
  }
  const onSignup = () => {
    console.log("onSignup")

  }

  return (<>
          <List>
            {isSignedIn ? <>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  dispatch(navigate("/", "_self"))
                }}>
                <ListItemIcon>
                  <Icon icon={"home"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font>Home</Font>}
                />
              </ListItemButton>
            </ListItem>

            
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  dispatch(navigate("/backoffice", "_self"))
                }}>
                <ListItemIcon>
                  <Icon icon={"dashboard"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font>Dashboard</Font>}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  dispatch(firebaseSignout())
                }}>
                <ListItemIcon>
                  <Icon icon={"exit"} color="primary"/>
                </ListItemIcon>
                <ListItemText
                  primary={<Font>{getTranslation("SIGNOUT", locale)}</Font>}
                />
              </ListItemButton>
            </ListItem>

            </> : null }
            

            

          </List>
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/