import React from "react"
import {
  Box,
  Container,
  Button,
  Alert,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
  navigate,
} from "../../../core"
import {
  firebaseSignin,
  InputEmail,
  InputPassword,
} from "../../../core"

export function Signup() {
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
        `validated.`
      ))
    }
  }
  return (<>
            <Container maxWidth="xs">
              <Box sx={{my:4}} />
              
              <Box sx={{my:1, margin: "auto"}}>
                
                <Box sx={{my:2}}>
                  <Alert>
                    New memberships are currently available
                  </Alert>
                </Box>

                  <Box sx={{my:2}}>
                    <InputEmail autoFocus onChange={setEmail} />
                  </Box>

        
                  <Box sx={{my:3, display: "flex"}}>
                    <Box sx={{flexGrow:1}}/>
                    <Box sx={{my:2}}>
                      <Button 
                          color="primary"
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                              dispatch(navigate("/signin", "_self"))
                          }}>
                            <Font variant="small" color="muted">
                              Sign in
                            </Font>
                        </Button>
                      </Box> 
                  </Box>
                  {/* */}
              </Box>
            </Container>
        </>
  )
}

/*

*/
