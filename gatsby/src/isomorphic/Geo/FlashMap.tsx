import * as React from "react"
import {
  Box,
  Dialog,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectGeolocator,
} from "../../goldlabel"
import {
  toggleBigMap,
  BigMap,
  CloseClip,
} from "../Geolocator"

export default function FlashMap() {
  const dispatch = usePwaDispatch()
  const geolocator = usePwaSelect(selectGeolocator)
  const {blinking} = geolocator
  if (blinking) return null
  
  return (
    <Dialog 
      open={true}
      fullScreen
      onClose={() => {
        dispatch(toggleBigMap(false))
      }}>
      <Box sx={{position: "relative", flexGrow: 1}}>
        <CloseClip />
        {!blinking ? <BigMap /> : null }
      </Box>
    </Dialog>
  )
}
