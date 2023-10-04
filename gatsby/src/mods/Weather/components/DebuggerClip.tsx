import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectLocale,
  // selectWeather,
} from "../../../goldlabel"

export default function DebuggerClip(props) {
  const {output} = props
  const locale = usePwaSelect(selectLocale)
  // const weather = usePwaSelect(selectWeather)
  return (
        <Box id="bottomRightClip"
          sx={{
            position: "absolute",
            zIndex: 100,
            top: 8,
            left: 8,
          }}>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </Box>
  )
}
