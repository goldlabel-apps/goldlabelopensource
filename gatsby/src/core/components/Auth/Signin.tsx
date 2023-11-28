import React from "react"
import {
  Box,
  Button,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  IconButton,
  LinearProgress,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
  usePwaSelect,
  selectCore,
  setCoreKey,
} from "../../../core"
import {
  firebaseSignin,
  InputEmail,
  InputPassword,
  selectDisplay,
} from "../../../core"

export function Signin() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const [email, setEmail] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const {signinOpen, authing} = core
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

  const closeSignin = () =>{
    dispatch(setCoreKey("signinOpen", false))
    return true
  }

  return (<>


          <Dialog 
              open={signinOpen}
              fullWidth
              maxWidth={"xs"}
              fullScreen={!isBig}
              onClose={closeSignin}>
              <DialogTitle>
                <CardHeader 
                  avatar={<Avatar src={"/svg/iOS.svg"} />}
                  action={<IconButton
                    sx={{m:1}}
                    onClick={() => {
                      dispatch(setCoreKey("signinOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>}
                  title={<Font variant="title">
                      Sign In
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

             
          </Dialog>

        </>
  )
}

/*
  <pre>{JSON.stringify(signinOpen, null, 2)}</pre>
*/