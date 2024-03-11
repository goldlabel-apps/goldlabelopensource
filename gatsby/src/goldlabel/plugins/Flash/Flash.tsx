import React from "react"
import {
  Box,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectFlash,
} from "../../../goldlabel"

export function Flash() {
  const flash = usePwaSelect(selectFlash)
  return (<>
            <Box sx={{m:0}}>
              <CardContent>
                <Box sx={{}}>
                  <pre>flash:{JSON.stringify(flash, null, 2)}</pre>
                </Box>
              </CardContent>
            </Box>
          </>
  )
}
