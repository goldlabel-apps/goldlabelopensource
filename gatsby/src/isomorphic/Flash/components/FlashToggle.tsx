import { PaletteColor } from "@mui/material"
import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
    Icon,
    usePwaSelect,
    usePwaDispatch,
    selectCore,
    setCoreKey,
} from "../../../goldlabel"

export default function FlashToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  const onToggle = () => {
    console.log("FlashToggle onToggle")
    return true
  }

  return (
    <React.Fragment>
          <IconButton 
            color="primary"
            onClick={onToggle}>
            <Icon icon={"flash"} />
          </IconButton>
    </React.Fragment>
  )
}

/*
(e: React.MouseEvent) => {
  e.preventDefault()
  dispatch(setCoreKey("darkmode", !darkmode))
}
*/