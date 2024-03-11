import React from "react"
import {
  Box,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectGeo,
} from "../../../goldlabel"

export function Geo() {
  const geo = usePwaSelect(selectGeo)
  return (<>
            <Box sx={{m:0}}>
              <CardContent>
                <Box sx={{}}>
                  <pre>geo:{JSON.stringify(geo, null, 2)}</pre>
                </Box>
              </CardContent>
            </Box>
          </>
  )
}
