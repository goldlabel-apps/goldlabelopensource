import * as React from "react"
import {glConfig} from "../../../config"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
  useTheme,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
} from "../../../core"
import {
  Label,
} from "../../Geolocator"

export default function GeolocatorMap(props: any) {
  const dispatch = usePwaDispatch()
  const {options} = props

  const {
    lat, 
    lng,
    zoom,
    onMarkerClick,
  } = options

  const {mapbox} = glConfig
  const mode = useTheme().palette.mode
  // console.log("mode", mode)
  const mapRef: any = React.useRef(null)
  const defaultCenter = {
    lat: options.lat,
    lng: options.lng,
    zoom: zoom || 4,
    flag: "eu",
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
              ref={mapRef}
              style={{height: 320}}
              initialViewState={{
                // @ts-ignore
                interactive: true,
                latitude: defaultCenter.lat,
                longitude: defaultCenter.lng,
                zoom: defaultCenter.zoom,
              }}
              mapStyle={style}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}>
                <Label 
                  options={options}
                  onMarkerClick={onMarkerClick}
                />
            </Map>
          </Box>
}
