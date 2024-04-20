import React from "react"
import {StageProps} from "../types"
import {
  Box,
} from "@mui/material"

export default function Stage({ 
  // id,
  children,

}: StageProps) {
  return <Box id={"flashStage"}
            sx={{
              height: 350,
              width: "100%",
              position: "relative",
              zIndex: 1,
          }}>
            {children}
          </Box>
}
