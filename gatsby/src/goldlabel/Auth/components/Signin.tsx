import React from "react"
import {
  Alert,
  Box,
  Container,
  Button,
  IconButton,
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
} from "../../../goldlabel"
import {
  firebaseSignin,
  // firebaseSignout,
} from "../../Auth"
import {
  InputEmail,
  InputPassword,
  // InputCheckbox,
} from "../../../mods/Forms"

export function Signin() {
  const dispatch = usePwaDispatch()
  const locale = usePwaSelect(selectLocale)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  
  const onSignup = () => {
    console.log("onSignup")

  }

  // const onRememerMeChange = () => {
  //   console.log("onRememerMeChange")
  // }

  const onHome = () => {
    dispatch(navigate("/", "_self"))
  }

  const validate = () => {
    if (email !== "" && password !== ""){
      dispatch(firebaseSignin(email, password))
    }else{
      dispatch(notify("success", "Email and password missing"))
    }
  }
  return (<>
            <Container maxWidth="xs">
              <Box sx={{my:1, margin: "auto"}}>
                <Box sx={{my:2}}>
                  {/* <Alert
                    sx={{pt:1}}
                    severity={"success"}
                    action={
                      
                    }
                    iconMapping={{
                      success: <Box sx={{}}>
                                <Icon icon={"backoffice"} />
                              </Box>,
                  }}> */}
                    <Box>
                      <Font variant="title">
                        {getTranslation("SIGNIN", locale)}
                      </Font>
                    </Box>
                  {/* </Alert> */}
                  
                </Box>

                    <Box sx={{my:2}}>
                      <InputEmail autoFocus onChange={setEmail} />
                    </Box>
                    <Box sx={{my:2}}>
                      <InputPassword onChange={setPassword}/>
                    </Box>
                    
                    {/* <Box sx={{my:2}}>
                      <InputCheckbox 
                        label="Remember me?"
                        defaultChecked={true}
                        onChange={onRememerMeChange}/>
                    </Box> */}

                    <Box sx={{my:3}}>
                      
                      <Button 
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={validate}>
                          <Box sx={{mr:2, mt:0.5}}>
                            <Icon icon="signin" />
                          </Box>
                        <Font>
                          {getTranslation("SIGNIN", locale)}
                        </Font>
                      </Button>

                      <IconButton 
                        color="primary"
                        onClick={onHome}>
                          <Icon icon="home" />
                      </IconButton>
                      
                      {/* <Button 
                        sx={{mr:1}}
                        color="primary"
                        onClick={onSignup}>
                          <Box sx={{mr:2, mt:0.5}}>
                            <Icon icon="signup" />
                          </Box>
                        <Font>
                          {getTranslation("SIGNUP", locale)}
                        </Font>
                      </Button> */}

                    </Box>
              </Box>
            </Container>
        </>
  )
}
/*
<pre>authed: {JSON.stringify(authed, null, 2)}</pre>
*/