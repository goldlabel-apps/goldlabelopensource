import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
} from "@mui/material"
import {BasicMarker} from "../"
import {
  usePwaSelect,
  selectDarkMode,
  selectGeolocator,
} from "../../../goldlabel"

export default function BasicMap(props: any) {
  const {
    options,
  } = props
  const geolocator = usePwaSelect(selectGeolocator)
  console.log("geolocator", geolocator)
  const {height} = options
  const mapRef: any = React.useRef(null)
  const [zoomedIn, setZoomedIn] = React.useState<boolean>(false);
  const darkmode = usePwaSelect(selectDarkMode)
  const defaultCenter = {
    lat: options.lat,
    lng: options.lng,
    zoom: 9,
    height: 300,
  }
  let style = process.env.REACT_APP_MAPBOX_STYLE
  if (darkmode) style = process.env.REACT_APP_MAPBOX_STYLE_DARK

  const onMarkerClick = () => {
    // if (!zoomedIn){
    //   mapRef.current?.flyTo({
    //     center: [options.lng, options.lat], 
    //     zoom: 16,
    //   })
    //   setZoomedIn(true)
    // } else {
    //   mapRef.current?.flyTo({
    //     center: [defaultCenter.lng, defaultCenter.lat], 
    //     zoom: defaultCenter.zoom,
    //   })
    //   setZoomedIn(false)
    // }
  }

  return <Box sx={{ display: "block" }}>
          
          <Map
            ref={mapRef}
            style={{height}}
            initialViewState={{
              // @ts-ignore
              interactive: false,
              latitude: defaultCenter.lat,
              longitude: defaultCenter.lng,
              zoom: defaultCenter.zoom,
            }}
            mapStyle={style}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}>
              <BasicMarker 
                options={options} 
                onMarkerClick={onMarkerClick}
              />
          </Map>
        </Box>
}

/*
<pre>: {JSON.stringify(options, null, 2)}</pre> 
*/