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
  GeoDialog,
  toggleDialog,
} from "../../Geo"

export default function GeoToggle() {
  const dispatch = usePwaDispatch()

  const onOpen = () => {
    dispatch(toggleDialog(true))
  }

  return <>
          <GeoDialog />
          <Tooltip title={<Font color="white">Geo</Font>}>
            <IconButton 
              color="primary"
              onClick={onOpen}>
              <Icon icon={"geo"} />
            </IconButton>
          </Tooltip>
        </>
}
