import React from "react"
import {
  Box,
  Container,
  Button,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
} from "../../../core"
import {
  AuthHeader,
  firebaseSignin,
  InputEmail,
  InputPassword,
  BottomBar,
} from "../../../core"

export function Signin() {
  const dispatch = usePwaDispatch()
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")

  const validate = () => {
    if (email !== "" && password !== ""){
      dispatch(firebaseSignin(email, password))
    }else{
      dispatch(notify(
        "FB 101",
        "success", 
        `Keep trying.`
      ))
    }
  }
  return (<>
            <Container maxWidth="xs">
              <Box sx={{my:4}} />
              <Box sx={{my:1, margin: "auto"}}>
              <Box sx={{mb:4}}>
                <AuthHeader title="Backoffice"/>
              </Box>
                  <Box sx={{my:2}}>
                    <InputEmail autoFocus onChange={setEmail} />
                  </Box>
                  <Box sx={{my:2}}>
                    <InputPassword onChange={setPassword}/>
                  </Box>
                  <Box sx={{my:3, display: "flex"}}>
                    <Box sx={{flexGrow:1}}/>
                    <Button 
                      color="primary"
                      onClick={validate}>
                        <Font variant="small">
                          Sign In
                        </Font>
                        <Box sx={{ml:2, mt:0.5}}>
                          <Icon icon="signin" />
                        </Box>
                    </Button>
                  </Box>
                  <BottomBar />
                    {/* <Box sx={{my:2}}>
                      <Font variant="small">
                      Build an app for free with <a>Goldlabel Open Source</a>. 
                      Sign up for a free membership today and get access 
                      to all the features you need to create an app 
                      that's both fast and ranks well. Much coding skill is required
                      </Font>
                    </Box>
                  <Box sx={{my:2}}>
                  
                    <Button 
                      color="primary"
                      onClick={(e: React.MouseEvent) => {
                        e.preventDefault()
                          dispatch(navigate("/signup", "_self"))
                      }}>
                        <Font variant="small">
                          Sign up
                        </Font>
                    </Button>
                    <Button 
                      disabled
                      color="primary">
                        <Font variant="small" color="muted">
                          Password?
                        </Font>
                    </Button>
                  </Box> */}

              </Box>
            </Container>
        </>
  )
}
