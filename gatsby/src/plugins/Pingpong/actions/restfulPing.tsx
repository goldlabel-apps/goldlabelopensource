import axios from "axios"

import { 
  store, 
  notify,
} from "../../../core"
import {
  setPingpongKey,
} from "../../Pingpong"

const compilePing = () => {
  const {pingpong} = store.getState()
  const {
    uid,
    host,
    ip,
    fingerprint,
    ipGeo,
  } = pingpong
  const {
    is_eu,
    country_name_official,
    continent_name,
    country_name,
    state_prov,
    district,
    city,
    country_capital,
    languages,
    latitude,
    longitude,
    time_zone,
    calling_code,
    country_code2,
  } = ipGeo
  return {
    uid,
    host,
    ip,
    fingerprint,
    lng: longitude,
    lat: latitude,
    flag: country_code2.toLowerCase(),
    continent: continent_name,
    countryName: country_name,
    province: state_prov,
    district,
    city,
    languages,
    countryNameFull: country_name_official,
    countryCapital: country_capital,
    timeZone: time_zone.name,
    diallingCode: calling_code,
    is_eu,
  }
}

export const restfulPing = (): any => async (dispatch: any) => {

  try {
    dispatch(setPingpongKey("pinging", true))
    const ep = `${process.env.REACT_APP_API}pingpong/ping`
    const ping = compilePing()
    axios.post(ep, ping)
      .then(function (res) {
        let message = "Great ping"
        if (res.data){
          message = res.data.data.data.message
        }
        dispatch(setPingpongKey("pinging", false))
        dispatch(setPingpongKey("pinged", true))
        dispatch(setPingpongKey("lastSaved", Date.now()))
        dispatch(notify(
          "Ping",
          "success", 
          message,
        ))
      })
      .catch(function (e) {
        let message = e.toString()
        if (message === "Error: Network Error") message = "API not running"
        dispatch(notify(
          "Listingslab API 522",
          "info", 
          message,
        ))
      })
  } catch (e: any) {
    dispatch(notify(
      "Listingslab API 503",
      "error", 
      `restfulPing ${e.toString()}`
    ))
  }
}
