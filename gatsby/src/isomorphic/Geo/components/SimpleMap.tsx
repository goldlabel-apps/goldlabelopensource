import * as React from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import Map from 'react-map-gl'
import {
  Box,
} from "@mui/material"
// import {
//   usePwaSelect, 
//   useDives,
//   selectPWA,
// } from "../../"
import {MapMarker} from "../../Weathermap"

export default function SimpleMap(props: any) {
  const {frontmatter} = props
  const {lat, lng} = frontmatter
  // console.log("lat, lng", lat, lng)
  return (<>
          <Box sx={{my:1}}>
            <Map
              style={{height: 225}}
              initialViewState={{
                // @ts-ignore
                interactive: false,
                latitude: lat,
                longitude: lng,
                zoom: 12
              }}
              mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX}>
                <MapMarker
                    data={{frontmatter}}
                />
            </Map>
            {/* <pre>{JSON.stringify(frontmatter, null, 2)}</pre> */}
          </Box>
        </>
  )
}
