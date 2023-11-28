import React from "react"
import {
  Box,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectAuth,
} from "../../../core"

export function AccountMenu() {
  const dispatch = usePwaDispatch()
  const auth = usePwaSelect(selectAuth)
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
    email = user.user.providerData[0].email
  }
  console.log("email", email)
  return (<>
  <Box>
    {email ? email : <>Sign in?</>}
  </Box>
          
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/