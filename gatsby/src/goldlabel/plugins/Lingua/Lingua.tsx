import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectLingua,
} from "../../../goldlabel"

export function Lingua() {
  const lingua = usePwaSelect(selectLingua)
  
  return (<>
            <Card>
              <CardContent>
                <Box sx={{
                  
                }}>
                  <pre>lingua:{JSON.stringify(lingua, null, 2)}</pre>
                </Box>
              </CardContent>
            </Card>
          </>
  )
}
