import {glConfig} from "../../../config"
import * as React from "react"
import {
  Box,
} from "@mui/material"
import {
    Icon,
    usePwaDispatch,
    Font,
    usePwaSelect,
    selectFlash,
} from "../../../goldlabel"
// import {
//   toggleDialog,
//   FlashDialog,
// } from "../../Flash"


export default function FlashHero() {
  // const dispatch = usePwaDispatch()
  const flash = usePwaSelect(selectFlash)
  const {playing} = flash
  const flashConfig = glConfig.isomorphic.flash
  const {hero} = flashConfig
  
  return (<Box 
            sx={{
              border: "1px solid gold"
            }}>
            playing {playing.toString()}<br />
            hero {hero.toString()}
          </Box>
  )
}
