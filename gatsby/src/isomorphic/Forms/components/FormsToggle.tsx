import { PaletteColor } from "@mui/material"
import * as React from "react"
import {
  IconButton,
  Tooltip,
} from "@mui/material"
import {
    Icon,
    usePwaSelect,
    usePwaDispatch,
    selectCore,
    Font,
} from "../../../goldlabel"

export default function FormsToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  const onToggle = () => {
    console.log("FlashToggle onToggle")
    return true
  }

  return (
    <React.Fragment>
      <Tooltip title={<Font color="white">Forms</Font>}>
        <IconButton 
          color="primary"
          onClick={onToggle}>
          <Icon icon={"forms"} />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}
