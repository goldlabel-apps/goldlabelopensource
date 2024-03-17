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
  ThemeDialog,
  toggleDialog,
} from "../../Theme"

export default function ThemeToggle() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)

  const onToggle = () => {
    dispatch(toggleDialog(true))
    return true
  }

  return <>
          <ThemeDialog /> 
          <Tooltip title={<Font color="white">Theme</Font>}>
            <IconButton 
              color="primary"
              onClick={onToggle}>
              <Icon icon={"theme"} />
            </IconButton>
          </Tooltip>
        </>
}
