import * as React from "react"
import {
  Box,
} from "@mui/material"
import {MiniMap} from "../../Geolocator"
export default function ListingMap(props: any) {
  let geoLocation: any = null
  const {frontmatter} = props
  const {
    lat,
    lng,
    placename,
    zoom,
  } = frontmatter
  if (lat && lng){
    geoLocation = {
      lat,
      lng,
      zoom,
      placename,
    }
  }
  return (<>
            <Box sx={{display: "block"}}>
              { geoLocation ? <>
                <Box sx={{}}>
                  <MiniMap 
                    geoLocation={geoLocation} 
                    frontmatter={frontmatter}
                  />
                </Box> 
              </> : null }              
            </Box>
          </>
  )
}
