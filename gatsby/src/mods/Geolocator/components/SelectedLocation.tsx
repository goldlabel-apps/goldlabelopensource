import * as React from "react"
import {
  useTheme,
  Box,
  Avatar,
} from "@mui/material"
import {
  Icon,
  usePwaSelect,
  selectDarkMode,
  selectGeolocator,
} from "../../../goldlabel"

export default function SelectedLocation() {
  const geo = usePwaSelect(selectGeolocator)
  const theme = useTheme()
  const darkmode = usePwaSelect(selectDarkMode)
  let borColor = theme.palette.primary.main
  let bgColor = "rgba(255,255,255,0.9)"
  if(darkmode) {
    borColor = theme.palette.primary.main
    bgColor = "rgba(0,0,0,0.9)"
  }
  const {location} = geo
  const {
    icon
  } = location

  return (<>
            <Box sx={{
              display: "block",
            }}>
              <Avatar
                      sx={{
                        border: "2px solid " + borColor,
                        background: bgColor,
                        width: 75, 
                        height: 75}}
                    >
                    <Icon icon={icon} color="primary"/>
                  </Avatar> 
               
            </Box>
          </>
  )
}
