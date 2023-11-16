import axios from "axios"
import {
  store,
  notify,
} from "../../../core"

import {
  UAParser,
} from "ua-parser-js"

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
  const parser = new UAParser()
  const device = parser.getResult()
  const {location} = window
  const {href} = location 
  const slug = location.pathname
  // console.log("slug", slug)
  const {title} = document
  return {
    uid,
    host,
    ip,
    href,
    slug,
    title,
    fingerprint,
    browser: device.browser.name,
    browserVs: device.browser.version,
    deviceModel: device.device.model,
    deviceType: device.device.type,
    deviceVendor: device.device.vendor,
    os: device.os.name,
    osVs: device.os.version,
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

export const newPing = (): any => async (dispatch: any) => {
  try {
    const ep = `${process.env.REACT_APP_API}pingpong/create`
    const ping = compilePing()
    console.log("ping", ping)
    axios.post(ep, ping)
        .then(function (res) {
            let fbId: string | null = null
            let message = "Create Ping"
            if (res.data){ 
                fbId = res.data.data.data.fbId
                message = res.data.data.data.message
            }
            dispatch(notify(
                "Pingpong 200",
                "success", 
                "Pinged",
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
      `sortPing ${e.toString()}`
    ))
  }
}
