import * as React from "react"
import {
  Box,
  CardMedia,
  // Paper,
} from "@mui/material"
// import {
//   Font,
// } from "../../../core"

export default function Image(props: any) {
  const {
    alt,
    src,
    height,
    width,
  } = props
  
  return (<>
            <Box sx={{
              width: width ? width : "100%",
              position: "relative",
            }}>
              {/* <Paper 
                sx={{
                    position: "absolute",
                    top: 4,
                    right: 4,
                    p: 0.5,
                    px: 1,
                    borderRadius: 0.5,
                }}>
                <Font variant="tiny">{alt}</Font>
              </Paper> */}
              <CardMedia 
                sx={{
                  borderRadius: 1,
                }}
                src={src}
                component={"img"}
                height={height}
                width={width}
                alt={alt}
              />
            </Box>
        </>
  )
}
