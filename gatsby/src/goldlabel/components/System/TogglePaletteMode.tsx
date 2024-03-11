import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
    Icon,
    usePwaDispatch,
} from "../../../goldlabel"

export default function TogglePaletteMode() {
  const dispatch = usePwaDispatch()

  return (
    <React.Fragment>
          <IconButton 
            color="primary"
            aria-label="lightmode"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              // dispatch(navigate("/backoffice", "_self"))
            }}>
            <Icon icon="lightmode" />
          </IconButton>
    </React.Fragment>
  )
}
