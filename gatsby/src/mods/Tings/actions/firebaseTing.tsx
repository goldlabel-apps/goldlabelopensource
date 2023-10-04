import { 
  collection,
  addDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  store,
} from "../../../goldlabel"
import {notifyTing} from "../"

export const firebaseTing = (): any =>
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
      // 
      if(!host) ready = false
      if(!fingerprint) ready = false
      if(!ipGeo) ready = false
      if(!userAgent) ready = false
      const title = document.title
      const slug = window.location.pathname
      const href = window.location.href
      if (ready){
        if (Date.now() - bootTime > 1000){
          const newTing = {
            time: Date.now(),
            fingerprint,
            host, 
            slug,
            href,
            title,
            ...ipGeo, 
            ...userAgent,
          }
          if (host !== "localhost:8000"){
            const db = getFirestore()
            await addDoc(collection(db, "tings"), newTing)
            const message = `${title}<br />
            ${location.protocol + '//' + location.host}/tings/?fingerprint=${fingerprint}`
            dispatch(notifyTing(message))
          }
        }
      }
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}

/*
https://listingslab.com/svg/flags/de${ipGeo.country_name.tolowerCase()}.svg
*/