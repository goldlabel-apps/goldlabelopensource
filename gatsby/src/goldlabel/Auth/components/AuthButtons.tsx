import React from "react"
import {
  Box,
  Button,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
  navigate,
} from "../../../../"
import {getTranslation} from "../../../../translations"

export function AuthButtons() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, auth} = pwa
  const signinStr = getTranslation("SIGNIN", locale)
  // const signupStr = getTranslation("SIGNUP", locale)
  const signoutStr = getTranslation("SIGNOUT", locale)
  const {authed} = auth
  // console.log("authed", authed)
  const goAuth = () => {
    dispatch(navigate("/auth", "_self"))
  }

  return (<>
          <Box sx={{mt:1.5}}>
            {!authed ? <>
              
              <Button
                onClick={goAuth}>
                  <Box sx={{mt:-0.75}}>
                <Font variant="small">
                    {signinStr}
                </Font>
                </Box>
                <Box sx={{ml:1.5}}>
                  <Icon icon="backoffice" />
                </Box>
            </Button>
            </> : <>
              <Button
                  variant="outlined"
                  onClick={goAuth}>
                <Font variant="small">
                    {signoutStr}
                </Font>
              </Button>
            </> }
            
          </Box>
        </>
  )
}

/*
<Button
                variant="text"
                onClick={() => {
                  console.log("signinStr")
                }}>
                <Font variant="small">
                    {signupStr}
                </Font>
              </Button>
*/