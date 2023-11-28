import axios from "axios"
import { 
  // store, 
  // setPwaKey,
  notify,
} from "../../../core"
import {
  setPingpongKey,
} from "../../Pingpong"

export const fetchIPGeo = (): any => async (dispatch: any) => {
  try {
    dispatch(setPingpongKey("ipGeoFetching", true))
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (res) {
        dispatch(setPingpongKey("ipGeo", res.data))
        dispatch(setPingpongKey("ip", res.data.ip))
        dispatch(setPingpongKey("ipGeoFetching", false))
      })
      .catch(function (e) {
        dispatch(notify(
          "IPGEO 602",
          "error", 
          `fetchIPGeo ${e.toString()}`
        ))
      })
  } catch (e: any) {
    dispatch(notify(
      "IPGEO 603",
      "error", 
      `fetchIPGeo ${e.toString()}`
    ))
  }
}
