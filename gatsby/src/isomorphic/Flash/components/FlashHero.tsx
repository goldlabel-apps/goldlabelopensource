import {glConfig} from "../../../config"
import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
    selectDisplay,
    usePwaSelect,
} from "../../../goldlabel"

export default function FlashHero() {
  const display = usePwaSelect(selectDisplay)
  const flashConfig = glConfig.isomorphic.flash
  const {
    hero,
    scenes,
  } = flashConfig
  let mobile = true
  if (display) mobile = display.mobile
  const sceneSlug = scenes[0]
  if (!hero) return null
  
  return (<Box 
            sx={{
              border: "1px solid gold",
              height: mobile ? 150 : 300,
            }}>
            {sceneSlug}
          </Box>
  )
}
