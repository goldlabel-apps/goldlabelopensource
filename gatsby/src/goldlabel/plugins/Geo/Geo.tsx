import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectGeo,
} from "../../../goldlabel"

export function Geo() {
  const geo = usePwaSelect(selectGeo)
  
  let lat = 0
  let lng = 0
  let zoom = 10

  return (<>
            <Card>
              <CardContent>
                <Box sx={{
                  
                }}>
                  <pre>geo:{JSON.stringify(geo, null, 2)}</pre>
                </Box>
              </CardContent>
            </Card>
          </>
  )
}
