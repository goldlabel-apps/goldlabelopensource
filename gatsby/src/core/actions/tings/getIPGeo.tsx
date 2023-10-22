import axios from "axios"
import { 
  store, 
  setPwaKey,
  notify,
  makeFingerprint,
} from "../../../core"

export const getIPGeo = (): any => async (dispatch: any) => {
  try {
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (res) {
        const {core} = store.getState()
        const {tings} = core
        dispatch(setPwaKey({ key: "core", value: {
          ...core,
          tings: {
            ...tings, 
            ipGeo: {...res.data},
          }
        }}))
        dispatch(makeFingerprint())
      })
      .catch(function (e) {
        dispatch(notify(
          "IPGEO602",
          "error", 
          `getIPGeo ${e.toString()}`
        ))
      })
  } catch (e: any) {
    dispatch(notify(
      "IPGEO603",
      "error", 
      `getIPGeo ${e.toString()}`
    ))
  }
}
