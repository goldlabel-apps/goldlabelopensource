import React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  selectPWA,
} from "../../../"
import {Signin} from "./"
// import {getTranslation} from "../../../translations"

export function Auth(props: any) {
  const {children, location} = props

  // console.log("location", location)
  // const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, authed} = pwa
  if (!authed) return <Signin />
  
  return (<>
            <Box sx={{}}>
              {children}
            </Box>
          </>
  )
}
/*
  <pre>{JSON.stringify(auth, null, 2)}</pre>
*/
