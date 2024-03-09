import axios from "axios"
import { 
  notify,
} from "../../../../goldlabel"
import {
  updateTing,
  makeRandomName,
} from "../"

export const iPGeo = (): any => async (dispatch: any) => {
  try {
    const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
    axios.get(ep)
      .then(function (iPGeo) {
        const randomName = `${iPGeo.data.city} Bob`
        dispatch(makeRandomName())
        dispatch(updateTing("displayName", randomName))
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
        // dispatch(postEmail())
      })
      .catch(function (e) {
        dispatch(notify("iPGeo 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("iPGeo 500", "error", e.toString()))
  }
}
