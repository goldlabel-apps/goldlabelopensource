import {GeolocatorShape} from "../types"
import * as React from "react"
import {glConfig} from "../../../config"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
  useTheme,
} from "@mui/material"

export default function GeolocatorMap(lat, lng, icon: GeolocatorShape) {

  const {mapbox} = glConfig
  const mode = useTheme().palette.mode
  const mapRef: any = React.useRef(null)
  const defaultCenter = {
    lat,
    lng,
    zoom: 4,
    icon,
  }
  let exitEarly = false

  if (!lat || !lng) exitEarly = true
  if (exitEarly) return null 

  let style = mapbox.light
  if (mode === "dark") style = mapbox.dark

  // const onMarkerClick = () => {
  //   dispatch (toggleBigMap(true))
  //   dispatch(flyToLocation(options))
  // }

  return <Box sx={{
            display: "block",
          }}>
            <Map
              mapStyle={style}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}
              ref={mapRef}
              style={{height: 320}}
              initialViewState={{
                // @ts-ignore
                interactive: false,
                latitude: defaultCenter.lat || 0,
                longitude: defaultCenter.lng || 0,
                zoom: defaultCenter.zoom || 4,
              }}>
                {/* <Label 
                  options={options}
                  onMarkerClick={onMarkerClick}
                /> */}
            </Map>
          </Box>
}
