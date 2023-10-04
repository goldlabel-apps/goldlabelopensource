import * as React from "react"
import moment from "moment"
import {
  Box,
  Alert,
  AlertTitle,
  CardActionArea,
  AlertColor,
} from "@mui/material"
import {
  Font,
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectWeather,
} from "../../../goldlabel"
import {
  toggleWeather,
} from "../../Weather"
// import {
//   getTranslation,
// } from "../../Lingua"
import {meta} from "../../Lingua/translations/weather"

const makeSkyConditions = (pc: number) => {
  let skyConditions = "Blue Sky!"
  if(pc > 5) skyConditions = "Mostly Sunny"
  if(pc > 40) skyConditions = "Partly Cloudy"
  if(pc > 50) skyConditions = "Mostly Cloudy"
  if(pc > 80) skyConditions = "Overcast"
  return skyConditions
}

const makeCardinal = (degrees: number) => {
    var val = Math.floor((degrees / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
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

export default function WeatherCTA() {
  let icon = "outlook"
  const severity: AlertColor = "success"
  // const locale = usePwaSelect(selectLocale)
  const dispatch = usePwaDispatch()
  const ctaCallback = () => dispatch(toggleWeather(true))
  const weather = usePwaSelect(selectWeather)
  const {forecast, fullscreen} = weather
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

  const {
    airTemperature,
    windSpeed,
  } = meta

  const skyConditions = makeSkyConditions(hour.cloudCover[0].value)
  // ${getTranslation("CURRENT_WEATHER", locale)}
  const label = `
  ${timeStr}. 
  ${skyConditions},
  ${hour.airTemperature[0].value} ${airTemperature.suffix}, 
 wind ${hour.windSpeed[0].value} ${windSpeed.suffix} from 
  the ${makeCardinal(hour.windDirection[0].value)}
  
  `
  return (<><CardActionArea
                disabled={fullscreen}
                onClick={ctaCallback}>
                <Alert
                  sx={{pt:1.5}}
                  severity={severity}
                  iconMapping={{
                    success: <Box sx={{}}>
                              <Icon icon={icon} />
                            </Box>,
                  }}>
                    <AlertTitle>
                      <Font>
                        {label}
                      </Font>
                    </AlertTitle>
                  </Alert>
              </CardActionArea>
    </>
  )
}

/*
  const {
    label,
    icon,
    severity,
    callback,
  } = options
  if (label) ctaLabel = label
  if (icon) ctaIcon = icon
  if (severity) ctaSeverity = severity
  if (callback) ctaCallback = callback

  React.useEffect(() => {
    const {hourIndex} = weather
    if (closestIndex !== hourIndex){
      // dispatch(setHourIndex(hourIndex))
    }
  }, [closestIndex, weather, dispatch])

  
  */