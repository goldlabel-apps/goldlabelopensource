import * as React from "react"
import {
  IconButton,
  Tooltip,
} from "@mui/material"
import {
    Icon,
    usePwaDispatch,
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
