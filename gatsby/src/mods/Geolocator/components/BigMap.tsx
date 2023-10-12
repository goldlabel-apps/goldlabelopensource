import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectDarkMode,
  useScreensize,
  selectGeolocator,
  selectFrontmatter,
} from "../../../goldlabel"
import {
  BigMarker,
} from "../../Geolocator"

export default function BigMap() {  
  const geolocator = usePwaSelect(selectGeolocator)
  const frontmatter = usePwaSelect(selectFrontmatter)
  const mapRef: any = React.useRef(null)
  const darkmode = usePwaSelect(selectDarkMode)
  const screensize = useScreensize()
  const {blinking, } = geolocator
  if (blinking) return null
  const {h, w} = screensize
  let adjustedZoom = 10.2
  if (w < 600) adjustedZoom = 9.25
  const defaultCenter = {
    zoom: adjustedZoom,
    lat: 35.95,
    lng: 14.32732412782047,
    icon: "diving",
    category: "diving",
  }
  let style = process.env.REACT_APP_MAPBOX_STYLE
  if (darkmode) style = process.env.REACT_APP_MAPBOX_STYLE_DARK

  React.useEffect(() => {
    const {flyTo} = geolocator
    if (flyTo){
      setTimeout(() => {
        if(mapRef.current){
          const {lat, lng} = flyTo
          mapRef.current.flyTo({
            center: [parseFloat(lng), parseFloat(lat)],
            duration: 5000,
            zoom: 14,
          })
        } 
      }, 500)
    }
   
  }, [defaultCenter, geolocator, mapRef])

  return <Box id="bigMapClip"
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: 1,
            }}>
            <Box sx={{ display: "block" }}>          
                <Map
                  ref={mapRef}
                  style={{height:h}}
                  mapStyle={style}
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                  initialViewState={{
                    // @ts-ignore
                    // interactive: false,
                    latitude: defaultCenter.lat,
                    longitude: defaultCenter.lng,
                    zoom: defaultCenter.zoom,
                  }}>
                  
                    <BigMarker 
                      onMarkerClick={() => {
                        console.log("clicked")
                      }} 
                      frontmatter={frontmatter} />
                </Map>
              </Box>
            </Box>
}
