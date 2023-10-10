import React from "react"
import {
  Box,
  Checkbox,
} from "@mui/material"
import {
  Font,
} from "../../../goldlabel"


export function InputCheckbox(props: any) {
  const {
    onChange,
    label,
    defaultChecked,
  } = props
  
  return (<>
          <Box sx={{display: "flex"}}>
            <Checkbox 
              onChange={onChange} 
              defaultChecked={defaultChecked}
            />
            <Box sx={{mt: 1.5}}>
              <Font variant="small">
                {label}
              </Font>
            </Box>
            
          </Box>
        </>
  )
}
