import * as React from 'react'
import {
  IconButton,
} from "@mui/material"
import {
  Icon,
  usePwaDispatch,
  usePwaSelect,
  selectWeather,
} from "../../../goldlabel"
import {
  toggleWeather,
} from "../../Weather"

export default function WeatherButton() {
  let title: string = "Loading weather..."
  const dispatch = usePwaDispatch()
  const weather = usePwaSelect(selectWeather)
  const {weatherDoc} = weather
  if (weatherDoc) title = weatherDoc.data.title
  return (<>
      <IconButton
        sx={{mb:1}}
        color="primary"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()
          dispatch(toggleWeather(true))
        }}>
          <Icon icon="outlook" />
        </IconButton>
    </>
  )
}
