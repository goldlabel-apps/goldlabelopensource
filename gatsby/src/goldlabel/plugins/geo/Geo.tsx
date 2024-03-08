import React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
  // Icon,
  usePwaSelect,
  selectGeo,
} from "../../../goldlabel"

export function Geo(props) {
  
  const geo = usePwaSelect(selectGeo)
  console.log("geo", geo)
  return (<>
          <Box sx={{border: "1px solid green"}}>
            <Font>
              MAP
            </Font>
            <pre>{JSON.stringify(props, null, 2)}</pre>
          </Box>
        </>
  )
}
