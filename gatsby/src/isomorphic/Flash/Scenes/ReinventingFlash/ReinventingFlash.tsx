import React from "react"
import {
  Box,
} from "@mui/material"
import {
  MovieClip,
  Macromedia,
} from "../../../Flash"
import {
  reinventingFlashAS
} from "./"

export function ReinventingFlash() {
  
  React.useEffect(() => {
    setTimeout(() => {
      reinventingFlashAS("SETUP")
    }, 250)
  }, [])

  return <>
          <Box 
            id="flashStage"
            sx={{
              height: 70,
              width: "100%",
              position: "relative",
              zIndex: 1,
          }}>
            
            <MovieClip
              mcId="mcMacromedia"
              opacity={1}
              zIndex={50}
              mcWidth={50}
              mcHeight={50}
              top={0}
              left={0}
            >
              <Macromedia  />
            </MovieClip>  

          </Box>
        </>
}
