import axios from "axios"
import { 
  // store, 
  // setPwaKey,
  notify,
} from "../../../../goldlabel"
import {setTingsKey} from "../"

export const fetchIPGeo = (): any => async (dispatch: any) => {
  try {
    // dispatch(setPingpongKey("ipGeoFetching", true))
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`

    axios.get(ep)
      .then(function (res) {
        console.log("res", res)
        // dispatch(setPingpongKey("ipGeo", res.data))
        // dispatch(setPingpongKey("ipGeoFetching", false))
        dispatch(setTingsKey("status", "idle"))
      })
      .catch(function (e) {
        dispatch(setTingsKey("status", "idle"))
        dispatch(notify("fetchIPGeo 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("fetchIPGeo 500", "error", e.toString()))
  }
}
