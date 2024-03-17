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
import {
  toggleDialog,
  FlashDialog,
} from "../../Flash"

export default function FlashToggle() {
  const dispatch = usePwaDispatch()

  const onOpen = () => {
    dispatch(toggleDialog(true))
  }

  return (<>
      <FlashDialog />
      <Tooltip title={<Font color="white">Flash</Font>}>
          <IconButton 
            color="primary"
            onClick={onOpen}>
            <Icon icon={"flash"} />
          </IconButton>
          </Tooltip>
    </>
  )
}

/*
(e: React.MouseEvent) => {
  e.preventDefault()
  dispatch(setCoreKey("darkmode", !darkmode))
}
*/