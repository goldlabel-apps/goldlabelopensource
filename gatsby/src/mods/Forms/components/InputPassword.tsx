import React from "react"
import {
  Box,
  TextField,
} from "@mui/material"
export function InputPassword(props: any) {
  const {
    onChange,
  } = props

  return (<>
          <Box sx={{my:1}}>
            <TextField 
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
