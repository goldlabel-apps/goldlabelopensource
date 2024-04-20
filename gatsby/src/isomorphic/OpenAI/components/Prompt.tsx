import * as React from "react"
import {
  Box,
  TextField,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaSelect,
  selectOpenai,
  usePwaDispatch,
  notify,
} from "../../../goldlabel"
import {
  ask,
  updatePrompt,
} from "../../OpenAI"

export default function Prompt() {
  const dispatch = usePwaDispatch()
  const openai = usePwaSelect(selectOpenai)
  const {
    prompt,
  } = openai
  
  const onAsk = () => {
    if (prompt === ""){
      dispatch(notify("Prompt 500", "info", "Ask a valid question please, sir"))
    } else {
      dispatch(ask(prompt))
    }
  }

  const onUpdatePrompt = (e: any) => {
    dispatch (updatePrompt(e.target.value))
  }
  
  return <>
  <Box sx={{display: "flex", my:1}}>
    <TextField 
      id="prompt"
      fullWidth
      multiline
      value={prompt}
      minRows={1}
      maxRows={6}
      label={<Font>
              Ask Oliver...
            </Font>} 
      variant="outlined"
      onBlur={onUpdatePrompt}
      onChange={onUpdatePrompt}
    />
    <Box sx={{display: "flex"}}>
      <IconButton 
        color="primary"
        onClick={onAsk}>
        <Icon icon="ask" />
      </IconButton>
    </Box>
  </Box>
  </>
}
