import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectFlash,
} from "../../../goldlabel"

export function Flash() {
  const flash = usePwaSelect(selectFlash)
  return (<>
            <Card>
              <CardContent>
                <Box sx={{
                  
                }}>
                  <pre>flash:{JSON.stringify(flash, null, 2)}</pre>
                </Box>
              </CardContent>
            </Card>
          </>
  )
}
