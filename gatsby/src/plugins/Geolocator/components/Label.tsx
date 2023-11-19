import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material"

export function Label(props:any) {
  const theme = useTheme()
  const {
    options, 
    onMarkerClick
  } = props
  let borColor = theme.palette.primary.main
  let bgColor = "rgba(255,255,255,0.8)"
  const {
    lat,
    lng,
    flag,
  } = options
  if (!lat || !lng) return null
  
  const oMC = () => {
    console.log("zoom .")
  }

  return <>
          <Marker
              latitude={lat} 
              longitude={lng}>
                <IconButton
                  onClick={oMC}>
                    <Avatar
                      src={`/svg/flags/${flag}.svg`}
                      sx={{
                        border: "1px solid " + borColor,
                        background: bgColor,
                        width: 50, 
                        height: 50,
                      }}
                    />               
                </IconButton>
          </Marker> 
        </>
}
