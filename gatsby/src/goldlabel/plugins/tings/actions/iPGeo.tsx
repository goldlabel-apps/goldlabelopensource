import axios from "axios"
import { 
  notify,
  // store,
} from "../../../../goldlabel"

export const iPGeo = (): any => async (dispatch: any) => {
  try {
    // const tings = store.getState().tings
    // const {ting} = tings
    // if (!ting) return null
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (iPGeo) {
        console.log("iPGeo", iPGeo)
      })
      .catch(function (e) {
        dispatch(notify("iPGeo 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("iPGeo 500", "error", e.toString()))
  }
}
