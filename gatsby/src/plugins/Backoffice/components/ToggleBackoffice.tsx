import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
    Icon,
    usePwaDispatch,
    navigate,
} from "../../../core"

export default function ToggleBackoffice() {
  const dispatch = usePwaDispatch()

  return (
    <React.Fragment>
          <IconButton 
            color="primary"
            aria-label="Backoffice"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault()
              dispatch(navigate("/backoffice", "_self"))
            }}>
            <Icon icon="backoffice" />
          </IconButton>
    </React.Fragment>
  )
}
