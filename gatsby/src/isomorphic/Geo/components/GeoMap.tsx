import {glConfig} from "../../../config"
import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  useDisplay,
  selectGeo,
  selectTheme,
} from "../../../goldlabel"

export default function GeoMap() {  
  const geo = usePwaSelect(selectGeo)
  const theme = usePwaSelect(selectTheme)
  const {paletteMode} = theme
  const mapRef: any = React.useRef(null)
  const display = useDisplay()
  const {blinking} = geo
  if (blinking) return null
  const {h, w} = display
  let adjustedZoom = 10.2
  if (w < 600) adjustedZoom = 9.25
  const defaultCenter = {
    zoom: adjustedZoom,
    lat: 35.95,
    lng: 14.32732412782047,
    icon: "diving",
  }
  let style = glConfig.isomorphic.geo.lightTheme
  // console.log("paletteMode", paletteMode)
  if (paletteMode === "dark") style = glConfig.isomorphic.geo.darkTheme

  React.useEffect(() => {
    const {flyTo} = geo
    if (flyTo){
      setTimeout(() => {
        if(mapRef.current){
          const {lat, lng} = flyTo
          mapRef.current.flyTo({
            center: [parseFloat(lng), parseFloat(lat)],
            duration: 7500,
            zoom: 14,
          })
        } 
      }, 500)
    }
  }, [defaultCenter, geo, mapRef])

  return <Box id="geoMap"
            sx={{
              position: "absolute",
              width: "100%",
              zIndex: 1,
            }}>
            <Box sx={{ display: "block" }}>          
                <Map
                  ref={mapRef}
                  style={{
                    height: 400,
                  }}
                  mapStyle={style}
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                  initialViewState={{
                    // @ts-ignore
                    // interactive: false,
                    latitude: defaultCenter.lat,
                    longitude: defaultCenter.lng,
                    zoom: defaultCenter.zoom,
                  }}>
                    <>MARKER</>
                    {/* <BigMarker 
                      onMarkerClick={() => {
                        console.log("clicked")
                      }} 
                      frontmatter={frontmatter} /> */}
                </Map>
              </Box>
            </Box>
}
