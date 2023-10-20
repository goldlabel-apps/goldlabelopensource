import React from "react"
import {
  Box,
  Button,
  IconButton,
} from "@mui/material"
import {
  Font,
  Icon,  
} from "../../../core"

export function FormIconButton(props: any) {
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
            <IconButton
              color="primary"
              onClick={onClick}>
              <Icon icon={icon} />
            </IconButton>
          </Box>
        </>
  )
}
