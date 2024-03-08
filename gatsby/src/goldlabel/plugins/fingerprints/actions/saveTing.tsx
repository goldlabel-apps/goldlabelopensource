import { getFirestore } from "firebase/firestore"
import {
  // collection, 
  // addDoc,
  doc,
  setDoc,
} from "firebase/firestore"
import { 
  notify,
} from "../../../../goldlabel"

export const saveTing = (
  ting: any,
): any => async (dispatch: any) => {
  try {
    const db = getFirestore()
    const {fingerprint, ip} = ting
    if (fingerprint && ip){
      await setDoc(doc(db, "fingerprints", fingerprint), {
        ...ting,
        updated: Date.now(),
      })
    }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
