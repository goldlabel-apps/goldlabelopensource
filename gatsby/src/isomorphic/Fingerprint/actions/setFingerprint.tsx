import { getFirestore } from "firebase/firestore"
import {
  doc,
  setDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
} from "../../../goldlabel"

export const setFingerprint = (
): any => async (dispatch: any) => {
  try {
    const {tings} = store.getState()
    if (!tings) return false 
    const {ting} = tings
    if (!ting) return false
    const {fingerprint} = ting
    const docRef = doc(getFirestore(), "fingerprints", fingerprint)
    const updates: any = {
      updated: Date.now(),
      hidden: false,
    }
    setDoc(docRef, updates, { merge: true })
  } catch (e: any) {
    console.warn(e)
    dispatch(notify("setFingerprint", "error", e.toString()))
  }
}
