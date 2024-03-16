import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
} from "@mui/material"
import {MiniMarker} from "../"
import {
  usePwaSelect,
  usePwaDispatch,
  selectDarkMode,
  selectGeolocator,
} from "../../../goldlabel"
import {
  toggleBigMap,
  flyToLocation,
} from "../../Geolocator"

export default function MiniMap(props: any) {
  const dispatch = usePwaDispatch()
  const { frontmatter} = props
  const geolocator = usePwaSelect(selectGeolocator)
  const {blinking} = geolocator
  if (blinking) return null
  const mapRef: any = React.useRef(null)
  const defaultCenter = {
    lat: frontmatter.lat,
    lng: frontmatter.lng,
    zoom: 9,
  }
  const darkmode = usePwaSelect(selectDarkMode)
  let exitEarly = false
  const {
    lat, 
    lng,
  } = frontmatter
  if (!lat || !lng) exitEarly = true
  if (exitEarly) return null  
  let style = process.env.REACT_APP_MAPBOX_STYLE
  if (darkmode) style = process.env.REACT_APP_MAPBOX_STYLE_DARK

  const onMarkerClick = () => {
    dispatch (toggleBigMap(true))
    dispatch(flyToLocation(frontmatter))
  }

  return <Box sx={{
          display: "block",
        }}>
          <Map
            ref={mapRef}
            style={{height: 213}}
            initialViewState={{
              // @ts-ignore
              interactive: false,
              latitude: defaultCenter.lat,
              longitude: defaultCenter.lng,
              zoom: defaultCenter.zoom,
            }}
            mapStyle={style}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}>
              <MiniMarker 
                frontmatter={frontmatter} 
                onMarkerClick={onMarkerClick}
              />
          </Map>
        </Box>
}
