import * as React from "react"
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  setCoreKey,
  selectCore,
} from "../../../core"


export default function DarkmodeToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const {darkmode} = core

  return <>
            <IconButton 
              color="primary"
              aria-label="Scroll Top"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                dispatch(setCoreKey("darkmode", !darkmode))
              }}>
              <Icon icon={darkmode ? "lightmode" : "darkmode"} />
            </IconButton>
          </>
}
