import * as React from "react"
import {
  Box,
  Link,
  IconButton,
  AppBar,
  Slider,
} from "@mui/material"
import {
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectPWA,
} from "../../../"
import {setHourIndex} from "../../Weathermap"

export function Timeline() {
  const dispatch = usePwaDispatch()
  const pwa = usePwaSelect(selectPWA)
  const {weathermap} = pwa
  const {stormglass, hourIndex} = weathermap
  const {hours} = stormglass
  const linkCol = "#0CF3DA"

  const updateHourIndex = (e:any) => {
    dispatch(setHourIndex(e.target.value))
  }

  const marks = [
    {
      value: 12,
      label: <Font>Today</Font>,
    },
    {
      value: 36,
      label: <Font>Tomorrow</Font>,
    },
    {
      value: 60,
      label: <Font>Sunday</Font>,
    },
    {
      value: 84,
      label: <Font>Monday</Font>,
    },
    {
      value: 108,
      label: <Font>Tuesday</Font>,
    },
    {
      value: 132,
      label: <Font>Wednesday</Font>,
    },
  ];

  return <>
        {/* <Box>
          <Link 
              sx={{cursor: "pointer", color: linkCol}}
              onClick={() => {
                // dispatch(navigate("/javascript/gatsby/", "_self"))
              }}>Today</Link>
            &nbsp;|&nbsp;
          <Link 
            sx={{cursor: "pointer", color: linkCol}}
            onClick={() => {
              // dispatch(navigate("/javascript/gatsby/", "_self"))
            }}>Tomorrow</Link>
          &nbsp;|&nbsp; 
        </Box> */}
        <Box sx={{mx:1, mt:1, mb: 2}}>
          <Slider
            color="secondary"
            onChange={updateHourIndex}
            aria-label="Weather Timeline"
            value={hourIndex}
            marks={marks}
            max={150}
            valueLabelDisplay="auto"
          />
        </Box>
      </>
}
