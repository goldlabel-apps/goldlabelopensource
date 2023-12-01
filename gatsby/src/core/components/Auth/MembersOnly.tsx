import React from "react"
import {
  Box,
  Button,
  Avatar,
  Container,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  LinearProgress,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
  usePwaSelect,
  selectCore,
} from "../../../core"
import {
  firebaseSignin,
  InputEmail,
  InputPassword,
  selectDisplay,
} from "../../../core"

export function MembersOnly() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const {authing} = core
  let isBig = false
  if (display) isBig = !display.mobile

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
          <DialogTitle>
                <CardHeader 
                  avatar={<Avatar src={"/svg/iOS.svg"} />}
                  
                  title={<Font variant="title">
                            Members Only
                        </Font>}
                />
              </DialogTitle>

              {authing ? <>
                <LinearProgress /> 
              </> :  <>
              
              <DialogContent>
                <Box sx={{my:2}}>
                  <InputEmail autoFocus onChange={setEmail} />
                </Box>
                <Box sx={{my:2}}>
                    <InputPassword onChange={setPassword}/>
                  </Box>
              </DialogContent>

              <DialogActions>
                <Button
                  className="enterable"
                  color="primary"
                  onClick={validate}>
                    <Font variant="small">
                      Sign In
                    </Font>
                    <Box sx={{ml:2, mt:0.5}}>
                      <Icon icon="signin" />
                    </Box>
                </Button>
              </DialogActions>
              </>}


           </Container>
        </>
  )
}

/*
  <pre>{JSON.stringify(signinOpen, null, 2)}</pre>
  action={<IconButton
                    sx={{m:1}}
                    onClick={() => {
                      dispatch(setCoreKey("signinOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>}
*/