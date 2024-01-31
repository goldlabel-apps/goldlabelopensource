import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"

export function InputEmail(props: any) {
  const {
    onChange,
    autoFocus,
  } = props
  return (<>
          <Box sx={{m:0}}>
            <TextField 
              autoCapitalize="none"
              autoFocus={autoFocus}
              fullWidth
              label="Email"
              onChange={(e:any) => {
                onChange(e.target.value)
              }}
            />
          </Box>
        </>
  )
}
