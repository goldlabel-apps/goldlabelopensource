import { getFirestore } from "firebase/firestore"
import { 
  collection, 
  addDoc,
  query, 
  where, 
  getDocs, 
} from "firebase/firestore"
import { 
  notify,
} from "../../../../goldlabel"
import {
  setTingsKey,
} from "../"

export const fingerprintCheck = (
  fingerprint: string,
): any =>
  async (dispatch: any) => {
    try {
      const db = getFirestore()
      const ref = collection(db, "fingerprints")
      const q = query(ref, where("fingerprint", "==", fingerprint))
      const snap = await getDocs(q)
      let exists = false
      snap.forEach((doc) => {
        dispatch(setTingsKey("fbId", doc.id))
        exists = true
      })
      if (!exists){
        const doc = await addDoc(ref, {
          created: Date.now(), fingerprint
        })
        dispatch(setTingsKey("fbId", doc.id))
      }
    } catch (e: any) {
      dispatch(notify("fingerprintCheck 500", "error", e.toString()))
    }
}
