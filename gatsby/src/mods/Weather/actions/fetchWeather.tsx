import axios from "axios"
import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

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
            data: response.data.data.doc,
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
          dispatch(notify("warning", "Weather forecast error :("))
        })
      }, 1000)
      
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
