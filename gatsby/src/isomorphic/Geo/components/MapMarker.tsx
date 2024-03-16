import * as React from "react"
import {Marker} from 'react-map-gl'
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  navigate,
} from "../../../"

export function MapMarker(props:any) {
  const {data} = props 
  const dispatch = usePwaDispatch()
  const {frontmatter} = data
  if (!frontmatter) return null
  const {lat, lng} = frontmatter
  if (!lat || !lng) return null
  return <>
          <Marker
              latitude={frontmatter.lat} 
              longitude={frontmatter.lng}>
            <IconButton
              sx={{
                display: "relative", 
                left: 0,
                top: 0,
              }}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                
                dispatch(navigate(frontmatter.slug, "_self"))
              }}>
                <Icon icon={frontmatter.icon} color="secondary" />
            </IconButton>
          </Marker> 
      </>
}
