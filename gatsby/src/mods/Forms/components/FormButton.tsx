import React from "react"
import {
  Box,
  Button,
} from "@mui/material"
import {
  Font,
  Icon,  
} from "../../../goldlabel"

export function FormButton(props: any) {
  const {
    action,
    onClick,
  } = props
  const {
    variant,
    label,
    icon,
  } = action
  return (<>
          <Box sx={{}}>
            <Button
              variant={variant}
              onClick={onClick}>
              <Font>{label}</Font>
              {icon ? <Box sx={{ml:1.5, mt: 1}}><Icon icon={icon} /></Box> : null }
            </Button>
          </Box>
        </>
  )
}
