import axios from "axios"
import { 
  store,
  setPwaKey,
  notify,
} from "../../../"

export const patchStormglass = (fbId: string): any =>
  async (dispatch: any) => {
    try {
      // console.log("patchStormglass", fbId)
      const {weathermap} = store.getState()
      dispatch(setPwaKey({ key: "weathermap", value: {
        ...weathermap, 
        fetching: true,
        fetched: false,
      }}))
      axios.patch(`https://api.listingslab.com/weathermap/stormglass/${fbId}`)
        .then(function (response) {
          const {severity, message} = response.data.data
          // console.log("data", data)
          dispatch(notify("success", message))
        })
    } catch (error: any) {
      console.log("Action error: patchStormglass", error)
    }
}
