import React from "react"
import {
  Box,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectLingua,
} from "../../../goldlabel"

export function Lingua() {
  const lingua = usePwaSelect(selectLingua)
  
  return (<>
            <Box sx={{}}>
              <CardContent>
                <Box sx={{}}>
                  <pre>lingua:{JSON.stringify(lingua, null, 2)}</pre>
                </Box>
              </CardContent>
            </Box>
          </>
  )
}
