import { 
    doc, 
    setDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  store,
} from "../../../core"

export const updateTing = (fbId: any): any =>
  async (dispatch: any) => {
    try {
      const {core} = store.getState()
      const {tings} = core
      const {
        host,
        fingerprint,
        ipGeo,
        userAgent,
      } = tings
      const uid = `${host}_${ipGeo.ip}_${fingerprint}`
      const device =  `${userAgent.device.vendor || ""} ${userAgent.device.model || ""}`
      const browser =  `${userAgent.browser.name || ""} ${userAgent.browser.version || ""}`
      const os =  `${userAgent.os.name || ""} ${userAgent.os.version || ""}`
      const locationStr = `${ipGeo.city || ""}, ${ipGeo.country_name || ""}`
      const ip = ipGeo.ip
      const timeZone = ipGeo.time_zone.name
      const lat = ipGeo.latitude
      const lng = ipGeo.longitude
      const slug = window.location.pathname
      const url = window.location.href
      const countryCode = ipGeo.country_code2.toLowerCase()
      const isp = ipGeo.isp
      const currency = ipGeo.currency.symbol
      const currentPage = {
        title: document.title,
        slug: window.location.pathname,
        url: window.location.href,
      }
      const db = getFirestore() 
      const fpRef = doc(db, 'tings', fbId)
      await setDoc(fpRef, {
        updated: Date.now(),
        uid,
        host,
        slug,
        url,
        fingerprint,
        currentPage,
        locationStr,
        browser,
        device,
        os,
        ip,
        timeZone,
        lat,
        lng,
        countryCode,
        isp,
        currency,
      }, { merge: true })
    } catch (e: any) {
      dispatch(notify(
        "TING201",
        "error", 
        `updateTing ${e.toString()}`
      ))
    }
}
