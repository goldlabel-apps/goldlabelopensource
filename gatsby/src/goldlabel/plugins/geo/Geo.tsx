import React from "react"
import {
  Box,
  // Button,
  // Card,
  // CardHeader,
  // CardActions,
  CardContent,
} from "@mui/material"
import {
  // Font,
  // Icon,
  usePwaSelect,
  selectGeo,
} from "../../../goldlabel"

export function Geo() {
  const geo = usePwaSelect(selectGeo)
  // console.log("geo", geo)
  return (<>
          
            <CardContent>
              <Box sx={{
                border: "1px solid lightgrey", 
                height: 175,
              }}>
                MAP
                <pre>{JSON.stringify(geo, null, 2)}</pre>
              </Box>
            </CardContent>
            {/* <CardActions>

                <Button
                    color="secondary"
                    variant="text"
                >
                    <Box sx={{mr:1, mt: 0.25}}>
                        <Font variant="small">
                        Full Screen
                        </Font>
                    </Box>
                    <Icon icon="fullscreen" color="primary" />
                </Button>

            </CardActions> */}
            
        </>
  )
}
