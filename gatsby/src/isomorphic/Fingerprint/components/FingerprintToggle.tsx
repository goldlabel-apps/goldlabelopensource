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
  FingerprintDialog,
  toggleDialog,
} from "../../Fingerprint"

export default function FingerprintToggle() {
  const dispatch = usePwaDispatch()

  const onOpen = () => {
    dispatch(toggleDialog(true))
  }

  return <>
          <FingerprintDialog />
          <Tooltip title={<Font color="white">Fingerprint</Font>}>
            <IconButton 
              color="primary"
              onClick={onOpen}>
              <Icon icon={"fingerprint"} />
            </IconButton>
          </Tooltip>
        </>
}
