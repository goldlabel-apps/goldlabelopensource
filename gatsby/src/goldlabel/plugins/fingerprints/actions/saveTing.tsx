import { getFirestore } from "firebase/firestore"
import {
  // collection, 
  // addDoc,
  doc,
  setDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
} from "../../../../goldlabel"

export const saveTing = (
): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    if (!ting) return null
    const db = getFirestore()
    const {fingerprint, ip} = ting
    if (fingerprint && ip){
      await setDoc(doc(db, "fingerprints", fingerprint), {
        ...ting,
        updated: Date.now(),
        href: window.location.href,
        docTitle: document.title,
      })
    }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
