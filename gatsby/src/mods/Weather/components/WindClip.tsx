import * as React from "react"
import moment from "moment"
import {
  Fab,
  Box,
  Card,
  CardHeader,
  IconButton,
} from "@mui/material"
import {
  Icon,
  Font,
  usePwaDispatch,
  usePwaSelect,
  selectWeather,
} from "../../../goldlabel"
import {setWeatherKey} from "../../Weather"
// import {getTranslation} from "../../Lingua"
import {meta} from "../../Lingua/translations/weather"

const makeCardinal = (degrees: number) => {
  const val = Math.floor((degrees / 22.5) + 0.5);
  const arr = ["North", "North North East", "North East", "East North East", "East", "East South East", "South East", "South South East", "South", "South South West", "South West", "West South West", "West", "West North West", "North West", "North North West"];
  return arr[(val % 16)];
}

const findClosestIndex = (numbers:Array<number>) => {
  if (numbers.length === 0) return 0
  let closest = numbers[0]
  let closestIndex = 0
  for(let i = 0; i < numbers.length;i++){
      let number = numbers[i]
      let absNumber =  Math.abs(number)
      let absClosest = Math.abs(closest)
      if (absNumber < absClosest) {
          closest = number
          closestIndex = i
      } 
      else if (absNumber === absClosest && closest < 0) {
          closest = number
          closestIndex = i
      }
  }
  return closestIndex
}

export default function WindClip() {
  const dispatch = usePwaDispatch()
  const weather = usePwaSelect(selectWeather)
  const {forecast, wind} = weather
  if (!forecast) return null
  const {hours} = forecast
  const now = Date.now()/1000
  const unixArr: Array<any> = []
  for(let i=0; i<hours.length; i++){
    const unixtime = moment((hours[i].time)).utc().unix()
    unixArr.push(Math.floor(now - unixtime))
  }
  const closestIndex = findClosestIndex(unixArr)
  const hour = hours[closestIndex]
  const {time} = hour
  let timeStr: any = moment((time)).utc().unix()
  timeStr = moment.unix(timeStr).format("h:mm a, dddd")
  const {windSpeed} = meta
  const value = `Wind ${hour.windSpeed[0].value} ${windSpeed.suffix} from ${makeCardinal(hour.windDirection[0].value)}
  `

  let isOpen = true
  if (wind === "open") isOpen = false
  return (
        <Box id="windClip"
          sx={{
            opacity: 1,
            position: "absolute",
            zIndex: 2000,
            top: 8,
            right: 8,
          }}>

            {isOpen ? <Fab
                color="primary"
                onClick={() => {
                  dispatch(setWeatherKey("wind", "open"))
                }}>
                <Icon icon="wind" />
            </Fab> : <Card sx={{
            m:1,
            background: "rgba(255,255,255,0.75)"  
          }}>
            <CardHeader 
              avatar={<Icon icon="wind" color="primary" />}
              action={<IconButton
                        sx={{m:1.5}}
                        color="primary"
                        onClick={() => {
                          dispatch(setWeatherKey("wind", "closed"))
                        }}
                      >
                <Icon icon="close"  />
              </IconButton>}
              
              title={<Font variant="title">
                          {value}
                          </Font>}
            />
            
            
            </Card> }
            

          

            
            
        </Box>
  )
}

/*
<pre>{JSON.stringify(wind, null, 2)}</pre>
*/