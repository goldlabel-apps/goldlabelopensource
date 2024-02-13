import React from "react"
import {
  Box,
  Container,
  DialogTitle,
  DialogContent,
  Avatar,
  CardHeader,
  LinearProgress,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
  usePwaSelect,
  selectCore,
  firebaseSignin,
  InputPassword,
  selectDisplay,
  navigate,
} from "../../../goldlabel"

export function PasswordOnly(props) {
  const email: string = "listingslab@goldlabel.pro"
  const {frontmatter} = props
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
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

  // console.log ("frontmatter", frontmatter)
  const {
    title,
    description,
  } = frontmatter
  return (<>
        <Container maxWidth="sm">
          <DialogTitle>
                <CardHeader 
                  avatar={<IconButton
                            sx={{m:1}}
                            onClick={() => {
                              dispatch(navigate("/", "_self"))
                            }}>
                              <Avatar src={"/svg/iOS.svg"} />
                            </IconButton>}
                  title={<Font variant="title">
                            {title}
                        </Font>}
                  subheader={<Font variant="description">
                                {description}
                            </Font>}
                />
              </DialogTitle>

              {authing ? <>
                <LinearProgress /> 
              </> :  <>
              
              <DialogContent>

                <Box sx={{display: "flex"}}>

                  <Box sx={{flexGrow: 1}}>
                    <InputPassword autoFocus onChange={setPassword}/>
                  </Box>

                  <Box sx={{mt: 2, ml: 2}}>
                    <IconButton
                      className="enterable"
                      color="primary"
                      onClick={validate}>
                        <Icon icon="signin" />
                    </IconButton>
                  </Box>
                </Box>

              </DialogContent>
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