import * as React from "react"
import {
  usePwaSelect,
  usePwaDispatch,
  selectWeather,
} from "../../goldlabel"
import {
  fetchWeather,
  WeatherFlash,
  updateDisplay,
} from "../Weather"

export default function Weather() {
  const dispatch = usePwaDispatch()
  const weather = usePwaSelect(selectWeather)
  React.useEffect(() => {
    if (weather){
      const {loaded, loading, display, initted} = weather
      if (!display && !initted) dispatch(updateDisplay())
      if (!loaded && !loading)  dispatch(fetchWeather())
    }
  }, [weather, dispatch])
  
  return  <WeatherFlash />
}


/*
  window.addEventListener('resize', () => {
    dispatch(blink())
    dispatch(updateDisplay())
  })
*/