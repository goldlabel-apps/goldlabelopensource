import * as React from "react"
import {
  Box,
  Button,
} from "@mui/material"
import {
    Icon,
    Font,
    usePwaDispatch,
} from "../../../goldlabel"

export type Btn = {
  title?: string
  label: string
  icon: string
  action: boolean
}

export default function ThemedIconBtn(props: any) {

  
  const dispatch = usePwaDispatch()
  const {
    label,
    icon,
    onClick,
    variant,
  } = props

  return <>
          <Button 
              variant={variant}
              onClick={onClick}>
                <Box sx={{mt:0.25}}>
                  <Font variant="small">
                    {label}
                  </Font>
                </Box>
                <Box sx={{ml: 1, mt:0.5}}>
                  <Icon icon={icon} />
                </Box>
            </Button>
        </>
}
