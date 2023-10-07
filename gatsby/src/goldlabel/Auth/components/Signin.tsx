import React from "react"
import {
  Box,
  Button,
} from "@mui/material"
import {
  Icon,
  Font,
  selectPWA,
  notify,
  usePwaDispatch,
  usePwaSelect,
} from "../../../../"
import {
  firebaseSignin,
  firebaseSignout,
} from "../../Auth"
import {
  InputEmail,
  InputPassword,
} from "../../Forms"
import {getTranslation} from "../../../../translations"

export function Signin() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {locale, authed} = pwa
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  
  const validate = () => {
    if (email !== "" && password !== ""){
      dispatch(firebaseSignin(email, password))
    }else{
      dispatch(notify("success", "Email and password missing"))
    }
  }
  const signoutStr = getTranslation("SIGNOUT", locale)
  const signinStr = getTranslation("SIGNIN", locale)
  
  if (authed) return <>
    <Box sx={{my:1, margin: "auto"}}>
      <Box sx={{my:2}}>
        <Button 
          fullWidth
          color="primary"
          variant="outlined"
          onClick={() => {
            dispatch(firebaseSignout())
          }}>
            <Box sx={{mr:2, mt:0.5}}>
              <Icon icon="exit" />
            </Box>
          <Font>
            {signoutStr}
          </Font>
        </Button>
      </Box>
    </Box>
  </>
  
  return (<>
              <Box sx={{my:1, margin: "auto"}}>
                    <Box sx={{my:2}}>
                      <InputEmail 
                        onChange={setEmail} />
                    </Box>
                    <Box sx={{my:2}}>
                      <InputPassword 
                        onChange={setPassword}/>
                    </Box>
                    <Box sx={{my:2}}>
                      <Button 
                        fullWidth
                        color="primary"
                        onClick={validate}>
                          <Box sx={{mr:2, mt:0.5}}>
                            <Icon icon="signin" />
                          </Box>
                        <Font>
                          {signinStr}
                        </Font>
                      </Button>
                    </Box>
                    
              </Box>
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/