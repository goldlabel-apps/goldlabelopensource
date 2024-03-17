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

export default function LinguaToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  const onToggle = () => {
    console.log("LinguaToggle onToggle")
    return true
  }

  return (
    <React.Fragment>
      <Tooltip title={<Font color="white">Lingua</Font>}>
          <IconButton 
            color="primary"
            onClick={onToggle}>
            <Icon icon={"lingua"} />
          </IconButton>
          </Tooltip>
    </React.Fragment>
  )
}
