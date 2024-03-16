import React from "react"
import moment from "moment"
import {
  Box,
} from "@mui/material"
import {
  usePwaSelect,
  selectPWA,
  Font,
} from "../../../"

export default function Wind() {
  const pwa = usePwaSelect(selectPWA) 
  const {weathermap} = pwa
  const {forecast} = weathermap
  if (!forecast) return null
  let {hours} = forecast
  let newH = [...hours]
  newH.reverse()
  // console.log("forecast", forecast)
  if (!hours.length) return null
  
  let indexNow = 0;
  const rightNow = moment().format("ha, dddd Do MMMM");
  for (let i = 0; i<hours.length; i++){
    if (rightNow === moment(hours[i].time).format("ha, dddd Do MMMM")){
        indexNow = i + 1;
        break;
    }
  }
  
  // const windDirection = forecast.hours[indexNow].windDirection[0].value
  const windDirection = 45
  const windSpeed = forecast.hours[indexNow].windSpeed[0].value
  
  let wDir = ""

  if (windDirection > 22.5 && windDirection < 67.5) wDir = "North East"
  if (windDirection > 67.5 && windDirection < 112.5) wDir = "East"
  if (windDirection > 112.5 && windDirection < 157.5) wDir = "South East"
  if (windDirection > 157.5 && windDirection < 202.5) wDir = "South"
  if (windDirection > 202.5 && windDirection < 247.5) wDir = "South West"
  if (windDirection > 247.5 && windDirection < 292.5) wDir = "West"
  if (windDirection > 292.5 && windDirection < 337.5) wDir = "North West"
  if (windDirection > 337.5 && windDirection < 22.5) wDir = "North"
 
  return (<Box sx={{
            zIndex: 100,
            position: "absolute",
            width: 150,
            top: 8,
            right: 8,
            borderRadius:1,
          }}>
            <Box sx={{
              position: "absolute",
            }}>
            <img 
              style={{width: 150}}
            src="/svg/Compass.svg" alt="wind"/>
            <Box sx={{
              position: "absolute",
              width: "100%",
            }}>
            <Font align="center">
              Wind from {wDir} {windSpeed}m/s 
            </Font>
            
            </Box>
            </Box>
            
            
        </Box>)
}

/*

<Font align="center">
            {windDirection} Direction of wind at 10m above sea level. 0° indicates wind coming from north
            </Font>


<pre>{JSON.stringify(forecast,null,2)}</pre>
*/
