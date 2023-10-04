import axios from "axios"
import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"
import {forecast} from "../forecast"

export const fetchWeather = (): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      const {apiEndpoint} = weather
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        loading: true,
      }}))
      setTimeout(() => {
        axios.get(apiEndpoint)
        .then(function (response) {
          dispatch(setPwaKey({ key: "weather", value: {
            ...weather, 
            loading: false,
            loaded: true,
            lastLoad: Date.now(),
            weatherDoc: response.data.data.doc,
            forecast,
          }}))
        })
        .catch((error) => {
          dispatch(setPwaKey({ key: "weather", value: {
            ...weather, 
            error: "Error loading weather forecast :(", // error.toString(),
            loading: false,
            loaded: true,
            lastLoaded: Date.now(),
          }}))
          dispatch(notify("info", "Error loading weather forecast :("))
        })
      }, 1000)
      
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
