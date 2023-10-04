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
  toggleWeather,
  flyToLocation,
} from "../../Weather"

export default function MiniMap(props: any) {
  const dispatch = usePwaDispatch()
  const {
    frontmatter,
  } = props
  const geolocator = usePwaSelect(selectGeolocator)
  const {blinking} = geolocator
  if (blinking) return null
  
  const mapRef: any = React.useRef(null)
  const defaultCenter = {
    lat: 35.95,
    lng: 14.43,
    zoom: 8.5,
  }
  const [zoomedIn, setZoomedIn] = React.useState<boolean>(false);
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
    dispatch (toggleWeather(true))
    setTimeout(() => {
      dispatch (flyToLocation(frontmatter))
    }, 250)
    
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
