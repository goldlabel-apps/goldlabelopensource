import React from "react"
import {
  Box,
  Checkbox,
} from "@mui/material"
import {
  Font,
} from "../../../core"

export function InputCheckbox(props: any) {
  const {
    onChange,
    label,
    defaultChecked,
    checked,
  } = props
  
  return (<>
          <Box sx={{display: "flex"}}>
          <Box sx={{mt: 1.5}}>
              <Font variant="small">
                {label}
              </Font>
            </Box>
            <Checkbox 
              onChange={onChange} 
              defaultChecked={defaultChecked}
              checked={checked}
            />
          </Box>
        </>
  )
}
