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

export default function TogglePaletteMode() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  return (
    <React.Fragment>
          <IconButton 
            color="primary"
            aria-label="lightmode"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(setCoreKey("darkmode", !darkmode))
            }}>
            <Icon icon={darkmode ? "lightmode" : "darkmode"} />
          </IconButton>
    </React.Fragment>
  )
}
