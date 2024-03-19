import {glConfig} from "../../../config"
import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map, {Marker} from "react-map-gl"
import {
  Box,
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  useDisplay,
  selectGeo,
  selectTheme,
} from "../../../goldlabel"


export default function FlyBetween(props) {

  let point1 = {
    label: "Us",
    icon: "goldlabel",
    zoom: 6,
    lat: 52.196844,
    lng: 0.985493,
  }

  let point2 = {
    label: "You",
    icon: "star",
    zoom: 6,
    lat: 52.196844,
    lng: 0.985493,
  }

  const geo = usePwaSelect(selectGeo)
  const theme = usePwaSelect(selectTheme)
  const {paletteMode} = theme
  const mapRef: any = React.useRef(null)
  const display = useDisplay()
  const {blinking} = geo
  if (blinking) return null
  const defaultCenter = {
    zoom: 6,
    lat: 52.196844,
    lng: 0.985493,
  }
  let style = glConfig.isomorphic.geo.lightTheme
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
              // border: "1px solid green",
              // width: "100%",
              zIndex: 1,
            }}>
            <Box sx={{ display: "block" }}>          
                <Map
                  ref={mapRef}
                  style={{
                    height: 200,
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
                    <Marker
                      latitude={defaultCenter.lat} 
                      longitude={defaultCenter.lng}
                    >
                      <Card>
                        MARKER
                      </Card>
                    </Marker>
                    
                    {/* <BigMarker 
                      onMarkerClick={() => {
                        console.log("clicked")
                      }} 
                      frontmatter={frontmatter} /> */}
                </Map>
              </Box>
            </Box>
}
