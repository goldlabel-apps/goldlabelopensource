import React from "react"
import {
  Box,
} from "@mui/material"
import {
  Font,
  // Icon,
  usePwaSelect,
  selectFlash,
} from "../../../goldlabel"

export function Flash() {
  
  const flash = usePwaSelect(selectFlash)
  console.log("flash", flash)
  return (<>
          <Box sx={{border: "5px solid pink"}}>
            <Font>
              Flash
            </Font>            
          </Box>
        </>
  )
}
