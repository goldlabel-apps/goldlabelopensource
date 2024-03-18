import {glConfig} from "../../../config"
import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
    selectDisplay,
    usePwaSelect,
    selectFlash,
} from "../../../goldlabel"

export default function FlashHero() {
  // const dispatch = usePwaDispatch()
  const flash = usePwaSelect(selectFlash)
  const display = usePwaSelect(selectDisplay)
  const {playing} = flash
  const flashConfig = glConfig.isomorphic.flash
  const {hero} = flashConfig
  const {mobile} = display
  
  return (<Box 
            sx={{
              border: "1px solid gold",
              height: mobile ? 150 : 300,
            }}>
            {hero}
          </Box>
  )
}
