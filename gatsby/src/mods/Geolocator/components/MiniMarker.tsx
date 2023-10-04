import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaSelect,
  selectDarkMode,
  usePwaDispatch,
} from "../../../goldlabel"
import {
  selectLocation,
} from "../../Geolocator"

export function MiniMarker(props:any) {
  const dispatch = usePwaDispatch()
  
  const theme = useTheme()
  const {frontmatter, onMarkerClick} = props
  const darkmode = usePwaSelect(selectDarkMode)
  let borColor = theme.palette.primary.main
  let bgColor = "rgba(255,255,255,0.8)"
  if(darkmode) {
    borColor = theme.palette.primary.main
    bgColor = "rgba(0,0,0,0.8)"
  }
  const {
    lat,
    lng,
    icon,
  } = frontmatter
  if (!lat || !lng) return null
  
  return <>
          <Marker
              latitude={lat} 
              longitude={lng}>
                <IconButton
                  onClick={onMarkerClick}>
                    <Avatar
                      sx={{
                        border: "2px solid " + borColor,
                        background: bgColor,
                        width: 50, 
                        height: 50,
                      }}
                    >
                    <Icon icon={icon} color="primary"/>
                  </Avatar>                    
                </IconButton>
          </Marker> 
        </>
}
