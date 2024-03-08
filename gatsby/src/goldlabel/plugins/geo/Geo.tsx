import React from "react"
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material"
import {
  Font,
  // Icon,
  usePwaSelect,
  selectGeo,
} from "../../../goldlabel"

export function Geo() {
  const geo = usePwaSelect(selectGeo)
  // console.log("geo", geo)
  return (<>
          <Card sx={{}}>
            <CardHeader 
              title={<Font variant="title">
                Geo
              </Font>}
            />
            <CardContent>
              <Box sx={{
                border: "1px solid black", 
                height: 230,
              }}>
                MAP
                {/* <pre>{JSON.stringify(geo, null, 2)}</pre> */}
              </Box>
            </CardContent>
            <CardActions>
              <Button
                variant="text"
              >
              Full Screen
              </Button>
            </CardActions>
          </Card>
        </>
  )
}
