import React from "react"
import {StageProps} from "../types"
import {
  Card,
} from "@mui/material"

export default function Stage({ 
  id,
  children, 
  height,
  backgroundColor,
}: StageProps) {
  return <Card 
            id={id}
            sx={{
              width: "100%",
              backgroundColor,
              position: "relative",
              zIndex: 1,
              height,
          }}>
            {children}
          </Card>
}
