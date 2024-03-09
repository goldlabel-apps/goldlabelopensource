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
    const {fingerprint, ip, hits} = ting
    if (fingerprint && ip){
      await setDoc(doc(db, "fingerprints", fingerprint), {
        ...ting,
        updated: Date.now(),
        href: window.location.href,
        docTitle: document.title,
        hits: hits + 1,
      })
    }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
