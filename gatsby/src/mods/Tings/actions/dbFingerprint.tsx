import { 
  collection, 
  query, 
  where, 
  addDoc,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  store,
} from "../../../goldlabel"
import {notifyTing} from "../"

export const dbFingerprint = (): any =>
  async (dispatch: any) => {
    try {
      let ready: boolean = true
      const {tings, bootTime} = store.getState()
      const {
        host,
        fingerprint,
        ipGeo,
        userAgent,
      } = tings
      if(!host) ready = false
      if(!fingerprint) ready = false
      if(!ipGeo) ready = false
      if(!userAgent) ready = false
      const slug = window.location.pathname
      const url = window.location.href
      if (ready){
        if (Date.now() - bootTime > 1000){
          const db = getFirestore()
          const q = query(collection(db, "fingerprints"), where("fingerprint", "==", fingerprint))
          const snap = await getDocs(q)
          let savedFp: any = null
          snap.forEach((doc) => {
            savedFp = {
              fbId: doc.id,
              ...doc.data(),
            }
          })
          const locationStr = `${ipGeo.city}, ${ipGeo.country_name}`
          const device =  `${userAgent.device.vendor} ${userAgent.device.model}`
          const browser =  `${userAgent.browser.name} ${userAgent.browser.version}`
          const os =  `${userAgent.os.name} ${userAgent.os.version}`
          const message = `${device}<br />${os}<br />${browser}<br />${ipGeo.ip}<br />${locationStr}`

          const fp: any = {
            fingerprint,
            locationStr,
            device,
            browser,
            os,
            host, 
            ip: ipGeo.ip,
            timeZone: ipGeo.time_zone.name,
            lat: ipGeo.latitude,
            lng: ipGeo.longitude,
            eu: ipGeo.is_eu,
            countryCode: ipGeo.country_code2.toLowerCase(),
            isp: ipGeo.isp,
            currency: ipGeo.currency.symbol,
            slug,
            url,
          }
          if (!savedFp){
            fp.created = Date.now()
            await addDoc(collection(db, "fingerprints"), fp)
            dispatch(notifyTing(message))
          }
          if (savedFp){
            fp.updated = Date.now()
            const fpRef = doc(db, 'fingerprints', savedFp.fbId)
            await setDoc(fpRef, fp, { merge: true })
          }
        }
      }
    } catch (e: any) {
      dispatch(notify("error", `getHost ${e.toString()}`))
    }
}
