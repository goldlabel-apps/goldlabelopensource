import * as React from "react"
import {
  IconButton,
  Tooltip,
  Badge,
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
            <Tooltip 
              title={<Font color="white">
                        Fingerprint
                      </Font>}>
                <IconButton 
                  color="primary"
                  onClick={onOpen}>
                    <Badge 
                      color="secondary"
                      badgeContent={0}>
                      <Icon icon={"fingerprint"} />
                    </Badge>
                </IconButton>
            </Tooltip>
          </>
}
