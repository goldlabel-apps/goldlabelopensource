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
  selectWeather,
  useAllMarkdown,
} from "../../../goldlabel"
import {WeatherMarker} from "../../Weather"

export default function WeatherMapboxClip() {  
  const geolocator = usePwaSelect(selectGeolocator)
  const allMarkdown = useAllMarkdown()
  const weather = usePwaSelect(selectWeather)
  const {flyTo} = weather
  let flyTos: Array<any> = []
  for(let i=0; i<allMarkdown.length; i++){
    const {frontmatter} = allMarkdown[i]
    const {lat, lng, title, icon, slug, category, image} = frontmatter
    if (lat && lng) flyTos.push({
      title,
      lat,
      lng,
      icon,
      slug,
      category,
      image,
    })
  }
  const mapRef: any = React.useRef(null)
  const darkmode = usePwaSelect(selectDarkMode)
  const screensize = useScreensize()

  const {blinking} = geolocator
  if (blinking) return null
  
  const {h, w} = screensize
  let adjustedZoom = 10.2
  if (w < 600) adjustedZoom = 9.25
  const defaultCenter = {
    zoom: adjustedZoom,
    lat: 35.95,
    lng: 14.38,
    icon: "diving",
    category: "diving",
  }
  let style = process.env.REACT_APP_MAPBOX_STYLE
  if (darkmode) style = process.env.REACT_APP_MAPBOX_STYLE_DARK

  

  React.useEffect(() => {
    
    if(mapRef.current){
      const {flyTo} = weather
      if (flyTo){
        const {lat, lng} = flyTo
        mapRef.current.flyTo({
          center: [parseFloat(lng), parseFloat(lat)],
          duration: 2500,
          // minZoom: adjustedZoom,
          zoom: 15,
        })
      } else{
        mapRef.current.flyTo({
          center: [defaultCenter.lng, defaultCenter.lat],
          duration: 2500,
          zoom: defaultCenter.zoom,
        })
      }
    }
    
  }, [defaultCenter, weather, mapRef])


  return <Box id="weatherMapboxClip"
            sx={{
              position: "absolute",
              width: "100%",
              height: h,
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
                  }}
                >
                  {flyTos.map((item, i) => {
                    // const {category, slug} = item
                    return <WeatherMarker 
                                key={`flyTo_${i}`}
                                options={item}
                              />
                    // if (category === "diving" || category === "dive-shops"){
                      
                    // } 
                    return null
                  })}
                </Map>
              </Box>
            </Box>
}
