import * as React from "react"
import {
  Box,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
} from "@mui/material"
import {
  Icon,
  Font,
  // usePwaDispatch,
} from "../../../goldlabel"


export default function NewMessage() {
  // const dispatch = usePwaDispatch()
  const valid = false
  const validate = () => {
    let valid = false
    if (prompt.length > 5) valid = true
    console.log("valid", valid)
    // dispatch(setAskOliverKey("valid", true))
  }

  const onPrompt = () => {
    // console.log("onPrompt", onPrompt)
    // dispatch(fetchPrompt())
    return true
  }

  React.useEffect(() => {
    validate()
  }, [])

  return (
    <Box
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0 },
      }}>

        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          
          <InputLabel htmlFor="outlined-adornment-password">
            <Font>
              New Message
            </Font>
          </InputLabel>
          
          <FilledInput
            id="newMessage"
            autoFocus
            onChange={(e) => {
              // dispatch(setAskOliverKey("prompt", e.target.value))
              validate()
            }}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="Reset prompt"
                  onClick={() => {
                    // dispatch(setAskOliverKey("prompt", ""))
                    validate()
                  }}
                  onMouseDown={() => {
                    // dispatch(setAskOliverKey("prompt", ""))
                    validate()
                  }}>
                  <Icon icon="right" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
  
    {valid ? <Button
              fullWidth
              sx={{mt:0.5}}
              onClick={onPrompt}>
                <Box sx={{ml:1}}>
                  <Font>
                    Send
                  </Font>
                </Box>
                <Box sx={{ml: 1, mt: 0.5}}>
                  <Icon icon="right" />
                </Box>
            </Button> : null }
          
    </Box>
  );
}
