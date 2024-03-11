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
