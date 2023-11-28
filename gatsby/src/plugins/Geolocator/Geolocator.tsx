import {GeolocatorShape} from "./types"
import * as React from "react"
import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  navigate,
} from "../../core"
import {GeolocatorMap} from "../Geolocator"

export default function Geolocator({lat, lng, icon}: GeolocatorShape) {
  const dispatch = usePwaDispatch()
  let mode = "advert"
  if(lat && lng){
    mode = "map"
  }

  return <>
              <Card>
                <CardActionArea 
                  // disabled={mode === "advert" ? false : true }
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                      dispatch(navigate("/goldlabel/geolocator/", "_self"))
                  }}
                >
                <CardHeader 
                  avatar={<Icon icon="geolocator" color="secondary"/>}
                  title={<Font>
                    Geolocator Plugin
                </Font>}
                />
                </CardActionArea>
                { mode === "advert" ? null : <>
                  <CardContent>
                    
                    <pre>icon: {JSON.stringify(icon, null, 2)}</pre>
                    <pre>lat: {JSON.stringify(lat, null, 2)}</pre>
                  </CardContent>
                </> }

                
                </Card>     
          </>
}

/*
<pre>mode: {JSON.stringify(mode, null, 2)}</pre>
*/