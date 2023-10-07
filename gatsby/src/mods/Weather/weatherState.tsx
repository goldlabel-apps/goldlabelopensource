// import {WeatherShape} from "../../../types"
// import {DisplayShape} from "./flash/actions/updateDisplay"
// import {goldlabelConfig} from "../../goldlabelConfig"
export type WeatherShape = {
    error: any
    display: any
    data: any
    loaded: boolean
    loading: boolean
    lastLoad: number
    hourIndex: number
    apiEndpoint: string
    showError: boolean
    fullscreen: boolean
    wind: "open" | "closed" | "hidden"
    active: "temperature" | "wind" | "outlook" | null
    blinking: boolean
    initted: boolean
    flyTo: any
}

export const weatherState: WeatherShape = {
    error: null,
    wind: "open",
    initted: false,
    flyTo: null,
    blinking: false,
    display: null,
    fullscreen: false,
    active: "outlook",
    data: null,
    loaded: false,
    loading: false,
    lastLoad: 0,
    hourIndex: 0,
    showError: true,
}

// apiEndpoint: `${process.env.REACT_APP_API}weather/${goldlabelConfig.features.weather.fbId}`,