import Weather from "./Weather"

import WeatherFlash from "./WeatherFlash"
import WeatherMapboxClip from "./components/WeatherMapboxClip"
import CloseClip from "./components/CloseClip"
import DebuggerClip from "./components/DebuggerClip"
import DiveSitesClip from "./components/DiveSitesClip"
import DiveShopsClip from "./components/DiveShopsClip"
import {WeatherMarker} from "./components/WeatherMarker"
import WeatherButton from "./components/WeatherButton"
import WeatherError from "./components/WeatherError"
import WeatherCTA from "./components/WeatherCTA"
import ZoomMapClip from "./components/ZoomMapClip"
import WindClip from "./components/WindClip"

import {weatherState} from "./weatherState"
import {fetchWeather} from "./actions/fetchWeather"
import {resetWeather} from "./actions/resetWeather"
import {setWeatherKey} from "./actions/setWeatherKey"
import {toggleWeather} from "./actions/toggleWeather"
import {setHourIndex} from "./actions/setHourIndex"
import {switchActive} from "./actions/switchActive"
import {flyToLocation} from "./actions/flyToLocation"
import {updateDisplay} from "./actions/updateDisplay"
import {makeCardinal} from "./actions/makeCardinal"

import {useCurrentWeather} from "./hooks/useCurrentWeather"

export {
    updateDisplay,
    WeatherFlash,
    WeatherMapboxClip,
    CloseClip,
    DebuggerClip,
    WeatherCTA,
    ZoomMapClip,
    DiveSitesClip,
    DiveShopsClip,
    WindClip,
}
export {
    weatherState,
    Weather,
    WeatherButton,    
    WeatherError,
    WeatherMarker,
}
export {
    useCurrentWeather,
}
export {
    makeCardinal,
    fetchWeather,
    resetWeather,
    setWeatherKey,
    toggleWeather,
    setHourIndex,
    switchActive,
    flyToLocation,
}

