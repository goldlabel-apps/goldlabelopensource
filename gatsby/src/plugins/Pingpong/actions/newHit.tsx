import { getFirestore } from "firebase/firestore"
import {
  doc, 
  getDoc,
  setDoc,
} from "firebase/firestore"
import { 
  notify,
  store,
} from "../../../core"

export const newHit = (
    fbId: string,
): any =>
  async (dispatch: any) => {
    try {
      const pp = store.getState().pingpong
      const d = store.getState().core.display
      let mobile = false
      if(d) mobile = d.mobile
      const {host, device} = pp
      let browserName = ""
      let browserVersion = ""
      let osName = ""
      let osVersion = ""
      let vendor = ""
      let model = ""
      if (device){
        browserName = device.browser.name
        browserVersion = device.browser.version
        osName = device.os.name
        osVersion = device.os.version
        vendor = device.device.vendor
        model = device.device.model
      }
      const docTitle = document.title
      const href = window.location.href
      const db = getFirestore()
      const dR = doc(db, "pingpong", fbId)
      const dS = await getDoc(dR)
      let p: any = dS.data()
      let hits = 0
      let lat = 0
      let lng = 0
      let flag = ""
      let city = ""
      let country = ""
      let isp = ""
      let province = ""
      let languages = ""
      let timeZone = ""
      let ip = ""
      const {ipGeo} = pp
      if (ipGeo) {
        ip = ipGeo.ip
        lat = ipGeo.latitude
        lng = ipGeo.longitude
        flag = ipGeo.country_code2.toLowerCase()
        city = ipGeo.city
        country = ipGeo.country_name 
        isp = ipGeo.isp
        province = ipGeo.state_prov 
        languages = ipGeo.languages
        timeZone = ipGeo.time_zone.name
      }
      if (p) hits = p.hits
      if (!p) p = { created: Date.now()}
      await setDoc(dR, {
        ...p,
        updated: Date.now(),
        hits: hits + 1,
        host,
        href,
        docTitle,
        ip,
        mobile,
        lat,
        lng,
        languages,
        flag,
        country,
        province,
        city,
        isp,
        timeZone,
        browserName,
        browserVersion,
        osName,
        osVersion,
        vendor,
        model,
      }, { merge: true })
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 520",
        "error", 
        `newHit ${e.toString()}`
      ))
    }
}
