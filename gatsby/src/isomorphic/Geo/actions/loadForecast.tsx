import axios from "axios"
import { 
  store,
  setPwaKey,
} from "../../../"

export const loadForecast =
  (): any =>
  async (dispatch: any) => {
    try {
      const {weathermap} = store.getState()
      dispatch(setPwaKey({ key: "weathermap", value: {
        ...weathermap, 
        loading: true,
      }}))
      axios.get("https://api.listingslab.com/weathermap/malta")
        .then(function (response) {
          dispatch(setPwaKey({ key: "weathermap", value: {
            ...weathermap, 
            loading: false,
            loaded: true,
            lastLoaded: Date.now(),
            forecast: response.data.data.data.forecast,
          }}))
        });
    } catch (error: any) {
      console.log("Action error: loadForecast", error)
    }
}
