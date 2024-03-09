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
    // console.log("saveTing", ting)
    const db = getFirestore()
    const {fingerprint, ip, hits} = ting
    let newHits = 1
    if (hits) newHits = hits + 1
    if (fingerprint && ip){
      await setDoc(doc(db, "fingerprints", fingerprint), {
        ...ting,
        updated: Date.now(),
        href: window.location.href,
        docTitle: document.title,
        hits: newHits,
      })
    }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
