import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"

export function InputPassword(props: any) {
  const {
    onChange,
    autoFocus,
  } = props

  return (<>
          <Box sx={{my:1}}>
            <TextField 
              autoFocus={autoFocus}
              fullWidth
              label="Password"
              type="password"
              onChange={(e:any) => {
                onChange(e.target.value)
              }}
            />
          </Box>
        </>
  )
}
