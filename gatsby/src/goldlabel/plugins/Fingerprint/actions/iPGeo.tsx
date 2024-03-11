import axios from "axios"
import { 
  notify,
  namesByLetter,
} from "../../../../goldlabel"
import {
  updateTing,
  newFingerprintNotify,
} from "../"

export const iPGeo = (): any => async (dispatch: any) => {
  try {
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (iPGeo) {
        const letter = iPGeo.data.city.substring(0,1).toUpperCase()        
        const name = namesByLetter[letter][(Math.random() * namesByLetter[letter].length) | 0]
        const displayName = `${iPGeo.data.city} ${name}`
        dispatch(notify("displayName", "success", `Hello ${displayName}`))
        dispatch(updateTing("displayName", displayName))        
        dispatch(updateTing("ip", iPGeo.data.ip))
        dispatch(updateTing("languages", iPGeo.data.languages))
        dispatch(updateTing("timeZone", iPGeo.data["time_zone"].name))
        dispatch(updateTing("city", iPGeo.data.city))
        dispatch(updateTing("state", iPGeo.data["state_prov"]))
        dispatch(updateTing("countryEmoji", iPGeo.data["country_emoji"]))
        dispatch(updateTing("countryCode", iPGeo.data["country_code2"].toLowerCase()))
        dispatch(updateTing("countryName", iPGeo.data["country_name"]))
        dispatch(updateTing("isEu", iPGeo.data["is_eu"]))
        dispatch(updateTing("currency", `${iPGeo.data.currency.name} ${iPGeo.data.currency.symbol}`))
        dispatch(updateTing("isp", iPGeo.data.isp))
        dispatch(updateTing("lat", iPGeo.data.latitude))
        dispatch(updateTing("lng", iPGeo.data.longitude))
        setTimeout(dispatch(() => newFingerprintNotify()), 1000)
      })
      .catch(function (e) {
        dispatch(notify("iPGeo 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("iPGeo 500", "error", e.toString()))
  }
}
