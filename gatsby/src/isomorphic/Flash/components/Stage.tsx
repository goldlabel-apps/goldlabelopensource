import React from "react"
import {
  Box,
  Card,
} from "@mui/material"

interface StageProps {
  id: string
  height: number
  width?: number
  backgroundColor: string
  hideOverflow: boolean
}

export default function Stage({ 
  id,
  children, 
  height,
  backgroundColor,
  hideOverflow,
}) {
  let overflow = "none"
  if (hideOverflow) overflow = "hidden"
  return <Card 
            id={id}
            sx={{
              backgroundColor,
              position: "relative",
              zIndex: 1,
              height, 
              width: "100%",
              overflow,
          }}>
            {children}
          </Card>
}
