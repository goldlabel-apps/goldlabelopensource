import React from "react"
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  CardHeader,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectCore,
  setCoreKey,
  selectDisplay,
  selectAuth,
  firebaseSignout,
  navigate,
} from "../../../core"

export function AuthedDialog() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const auth = usePwaSelect(selectAuth)
  const display = usePwaSelect(selectDisplay)
  if (!auth) return null
  const {user} = auth
  let isSignedIn = false
  let providerData = null
  let uid = null
  let email = null
  if (user){
    isSignedIn = true
    providerData = user.user.providerData
    uid = user.user.uid
    email = user.user.email
  }
  // console.log("email", email)
  const {accountDialogOpen} = core
  let isBig = false
  if (display) isBig = !display.mobile

  const closeAccountOpen = () =>{
    dispatch(setCoreKey("accountDialogOpen", false))
    return true
  }

  return (<>


          <Dialog 
              open={accountDialogOpen}
              fullWidth
              maxWidth={"xs"}
              fullScreen={!isBig}
              onClose={closeAccountOpen}>

              <DialogTitle>

                <CardHeader 
                  title={<Font variant="title">
                            Signed In

                        </Font>}
                  avatar={<Avatar src={"/svg/iOS.svg"} />}
                  action={<IconButton
                    sx={{m:1}}
                    onClick={() => {
                      dispatch(setCoreKey("accountDialogOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>}
                  
                />
              </DialogTitle>

              <DialogContent>
                <List dense>
                  
                  

                  <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("accountDialogOpen", false))
                      dispatch(navigate("/backoffice", "_self"))
                    }}>
                  <ListItemIcon>
                    <Icon icon={"backoffice"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Backoffice
                              </Font> }/>
                  </ListItemButton>

                  <ListItemButton
                    sx={{mb:1}}
                    color="primary"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      dispatch(setCoreKey("accountDialogOpen", false))
                      dispatch(firebaseSignout())
                    }}>
                  <ListItemIcon>
                    <Icon icon={"signout"} color="primary"/>
                  </ListItemIcon>
                  <ListItemText
                    primary={<Font>
                                Sign out
                              </Font> }/>
                  </ListItemButton>
                </List>
              </DialogContent>
              
          </Dialog>

        </>
  )
}

/*
  <pre>{JSON.stringify(signinOpen, null, 2)}</pre>
*/