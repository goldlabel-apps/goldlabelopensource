import * as React from "react"
import {
  Box,
  Dialog,
} from "@mui/material"
import {
  usePwaDispatch,
  usePwaSelect,
  selectWeather,
  selectGeolocator,
} from "../../goldlabel"
import {
  toggleWeather,
  WeatherMapboxClip,
  CloseClip,
  DiveSitesClip,
  DebuggerClip,
  ZoomMapClip,
  DiveShopsClip,
} from "../Weather"

export default function WeatherFlash() {
  const debug = false
  const dispatch = usePwaDispatch()
  const weather = usePwaSelect(selectWeather)
  const geolocator = usePwaSelect(selectGeolocator)
  const {fullscreen} = weather
  const {blinking} = geolocator
  if (blinking) return null
  
  return (
    <Dialog 
      open={fullscreen}
      fullScreen
      onClose={() => {
        dispatch(toggleWeather(false))
      }}>
      <Box sx={{position: "relative", flexGrow: 1}}>
        {debug ? <DebuggerClip output={geolocator}/> : null }
        
        <ZoomMapClip />
        <DiveShopsClip />
        <DiveSitesClip />

        <CloseClip />
        {!blinking ? <WeatherMapboxClip /> : null }
      </Box>
    </Dialog>
  )
}
