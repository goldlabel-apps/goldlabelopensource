import axios from "axios"
import { 
  store,
  setPwaKey,
} from "../../../"

export const fetchStormglass = (fbId: string): any =>
  async (dispatch: any) => {
    try {
      const {weathermap} = store.getState()
      dispatch(setPwaKey({ key: "weathermap", value: {
        ...weathermap, 
        fetching: true,
        fetched: false,
      }}))
      axios.get(`https://api.listingslab.com/weathermap/stormglass/${fbId}`)
        .then(function (response) {
          const doc = response.data.data.doc
          const {updated, forecast, meta}  = doc
          dispatch(setPwaKey({ key: "weathermap", value: {
            ...weathermap,
            fbId,
            meta,
            stormglass: forecast,
            fetching: false,
            fetched: true,
            timeFetched: Date.now(),
            updated,
          }}))
        });
    } catch (error: any) {
      console.log("Action error: fetchStormglass", error)
    }
}
