import React from "react"
import {
  Grid,
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
  let providerData = null
  let uid = null
  if (user){
    isSignedIn = true
    providerData = user.user.providerData
    uid = user.user.uid
  }

  return (<>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <List>
                
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => {
                      dispatch(navigate("/", "_self"))
                    }}>
                    <ListItemIcon>
                      <Icon icon={"home"} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                      primary={<Font variant="small">{getTranslation("HOME", locale)}</Font>}
                    />
                  </ListItemButton>
                </ListItem>

                {isSignedIn ? <>
                
                  <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => {
                        dispatch(firebaseSignout())
                      }}>
                      <ListItemIcon>
                        <Icon icon={"exit"} color="primary"/>
                      </ListItemIcon>
                      <ListItemText
                        primary={<Font variant="small">{getTranslation("SIGNOUT", locale)}</Font>}
                      />
                    </ListItemButton>
                  </ListItem>
                </> : null }
              </List>
            </Grid>
          </Grid>      
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/