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

export default function FingerprintToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  const onToggle = () => {
    console.log("FingerprintToggle onToggle")
    return true
  }

  return (
    <React.Fragment>
      <Tooltip title={<Font color="white">Fingerprint</Font>}>
        <IconButton 
          color="primary"
          onClick={onToggle}>
          <Icon icon={"fingerprint"} />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}

/*
(e: React.MouseEvent) => {
  e.preventDefault()
  dispatch(setCoreKey("darkmode", !darkmode))
}
*/