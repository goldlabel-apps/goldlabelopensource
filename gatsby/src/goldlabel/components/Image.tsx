import * as React from "react"
import {
  Box,
  CardMedia,
} from "@mui/material"

export default function Image(props: any) {
  const {options} = props
  const {
    alt,
    src,
    height,
    width,
  } = options
  
  return (<>
            <Box sx={{
              width: width ? width : "100%",
              
            }}>
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
