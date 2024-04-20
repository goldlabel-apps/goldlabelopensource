import React from "react"
import {
  Box,
} from "@mui/material"
import {
  ReinventingFlash,
} from "../Flash"

export type FlashProps = {
  flashId: string
  children?: React.ReactNode
  width?: number | string
  height?: number | string
}

export default function Flash(props: any) {
  const {options} = props
  let w = "100%"
  let h = 175
  const {
    flashId,
    height,
    width,
  } = options
  if (height) h = height
  if (width) w = width

  return <Box 
            id={flashId}
            sx={{
              border: "1px solid gold",
              height: h,
              width: w,
            }}>
            <ReinventingFlash />
        </Box>
}
