import React from "react"
import {
  Box,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectForms,
} from "../../../goldlabel"

export function Forms() {
  const forms = usePwaSelect(selectForms)
  
  return (<>
            <Box sx={{m:0}}>
              <CardContent>
                <Box sx={{}}>
                  <pre>forms:{JSON.stringify(forms, null, 2)}</pre>
                </Box>
              </CardContent>
            </Box>
          </>
  )
}
