import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  useTheme,
  useMediaQuery,
  Card,
} from "@mui/material"
import {
  usePwaSelect,
  usePwaDispatch,
  selectPWA,
} from "../../../"
import {
  Controls,
  MapMarker,
  useAllMapPoints,
  Wind,
} from "../"

export default function MapboxMap() {
  const dispatch = usePwaDispatch()
  const dives = useAllMapPoints()
  const pwa = usePwaSelect(selectPWA)
  const {weathermap} = pwa
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up("sm"))
  const {
    zoom,
  } = weathermap

  React.useEffect(() => {
    const {loaded, loading} = weathermap
    if (!loaded && !loading){
      dispatch(loadForecast())
    }
  }, [weathermap, dispatch])

  return (<>
          {/* <pre>{JSON.stringify(forecast, null, 2)}</pre> */}
          
          <Card sx={{
            position: "relative",
            zIndex: 10,
          }}>
            <Wind />
            
            <Map
              style={{
                height: isBig ? 350 : 250,
                borderRadius: 1,
              }}
              initialViewState={{
                // @ts-ignore
                interactive: false,
                latitude: 35.94,
                longitude: 14.38,
                zoom
              }}
              mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}>
              {dives.map((item: any, i: number) => {
                return <MapMarker 
                          key={`marker_${i}`} 
                          data={item}
                        />
              })}
            </Map>
            <Controls />
          </Card>
        </>
  )
}
