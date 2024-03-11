import { getFirestore } from "firebase/firestore"
import {
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
      const d  = await setDoc(doc(db, "fingerprints", fingerprint), {
        ...ting,
        updated: Date.now(),
      })
    }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
