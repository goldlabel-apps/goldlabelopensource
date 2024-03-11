import React from "react"
import {
  Box,
  Card,
  CardContent,
} from "@mui/material"
import {
  usePwaSelect,
  selectForms,
} from "../../../goldlabel"

export function Forms() {
  const forms = usePwaSelect(selectForms)
  
  return (<>
            <Card sx={{m:1}}>
              <CardContent>
                <Box sx={{
                  
                }}>
                  <pre>forms:{JSON.stringify(forms, null, 2)}</pre>
                </Box>
              </CardContent>
            </Card>
          </>
  )
}
