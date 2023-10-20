import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"

export function InputString(props: any) {
  
  const {
    field,
    onUpdate, 
    value,
    validation,
    defaultValue,
  } = props

  const {
    id,
    label,
    required,
    autoFocus,
    helperText,

  } = field
  let displayed = value
  let errors: any = null
  let instructions = helperText
  let isValid = true
  if (validation){
    errors = validation.errors
    instructions = ""
    if (errors.length){
      for (let i=0; i<errors.length; i++){
        if (errors[i].id === id){
          instructions = errors[i].message
          isValid = false
        }
      }
    }
  }
  if (displayed === "" && defaultValue !== "") displayed = defaultValue
  return (<>
          <Box sx={{my:2}}>
            <TextField 
              error={!isValid}
              id={id}
              value={displayed}
              autoFocus={autoFocus && value === ""}
              label={label}
              required={required}
              fullWidth
              onChange={(e:any) => {
                onUpdate(id, e.target.value)
              }}
              helperText={instructions}
            />
          </Box>
        </>
  )
}
