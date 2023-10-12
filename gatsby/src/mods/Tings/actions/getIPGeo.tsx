import axios from "axios"
import { 
  store, 
  setPwaKey,
  notify,
} from "../../../goldlabel"
import {
  getUserAgent,
} from "../"

export const getIPGeo = (): any =>
async (dispatch: any) => {
  try {
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (response) {
        const {tings} = store.getState()
        dispatch(setPwaKey({ key: "tings", value: {
          ...tings, 
          ipGeo: {...response.data},
        }}))
        dispatch(getUserAgent())
      })
      .catch(function (e) {
        dispatch(notify("error", `getIPGeo ${e.toString()}`))
      })
  } catch (e: any) {
    dispatch(notify("error", `getIPGeo ${e.toString()}`))
  }
}
