import { 
  collection, 
  query, 
  where, 
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"
import {notifyTing} from "../"

export const firebaseTing = (): any =>
  async (dispatch: any) => {
    try {
      let fbId: any = null
      const {tings, bootTime} = store.getState()
      let ready: boolean = true
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
      if (ready){
        if (Date.now() - bootTime < 1000){
          const newTing = {
            time: Date.now(),
            fingerprint,
            host, 
            ...ipGeo, 
            ...userAgent,
          }
          
          const db = getFirestore()
          const q = query(collection(db, "tings"), where("fingerprint", "==", fingerprint));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            fbId = doc.id
          })
          if (!fbId) {
            await addDoc(collection(db, "tings"), newTing)
            dispatch(notifyTing("New Ting"))
            dispatch(notify("success", `Welcome`))
          }
          if(fbId){
            const fingerprintRef = doc(db, 'tings', fbId);
            await setDoc(fingerprintRef, newTing, { merge: true });
            dispatch(notifyTing("Ting updated"))
          }
        } 
      }
      dispatch(setPwaKey({ key: "fbId", value: fbId}))
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}