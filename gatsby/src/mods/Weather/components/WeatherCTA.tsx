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
import {
  formatWind,
  formatCardinal,
  formatSky,
} from "../../Geolocator"
import {meta} from "../../Lingua/translations/weather"

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
    return closestIndex + 1
}

export default function WeatherCTA() {
  let icon = "outlook"
  const severity: AlertColor = "success"
  const dispatch = usePwaDispatch()
  const ctaCallback = () => dispatch(toggleWeather(true))
  const weather = usePwaSelect(selectWeather)
  const {fullscreen, data} = weather
  if (!data) return null
  const {forecast} = data.data
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
  const {
    airTemperature,
  } = meta
  const {time} = hour
  let timeStr:any = moment((time)).utc().unix()
  timeStr = moment.unix(timeStr).format("h a")
  const skyConditions = formatSky(hour.cloudCover[0].value)
  const windStrength = formatWind(hour.windSpeed[0].value)
  const windCardinal = formatCardinal(hour.windDirection[0].value)
  const label = `At ${timeStr} it will be ${Math.floor(hour.airTemperature[0].value*10)/10} ${airTemperature.suffix}, 
  ${windStrength} from the ${windCardinal} & 
  ${skyConditions}`

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