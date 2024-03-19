import { HexColorPicker } from "react-colorful"
import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
    usePwaDispatch, 
    usePwaSelect,
    selectTheme,
} from "../../../goldlabel"
import {
  setColor,
} from "../../Theme"

export default function PickColor() {
  const dispatch = usePwaDispatch()
  const theme = usePwaSelect(selectTheme)
  const {
    color,
  } = theme

  const onColorChoice = (newColor) => {
    dispatch(setColor(newColor))
  }

  return (
    <Box sx={{}}>
      <HexColorPicker 
        color={color} 
        onChange={onColorChoice} />
    </Box>
  )
}

/*
https://www.npmjs.com/package/react-colorful#getting-started
*/