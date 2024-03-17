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

export default function GeoToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  const onToggle = () => {
    console.log("GeoToggle onToggle")
    return true
  }

  return (
    <React.Fragment>
      <Tooltip title={<Font color="white">Geo</Font>}>
          <IconButton 
            color="primary"
            onClick={onToggle}>
            <Icon icon={"geo"} />
          </IconButton>
          </Tooltip>
    </React.Fragment>
  )
}
