import { getFirestore } from "firebase/firestore"
import {
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
} from "../../../../goldlabel"



export const saveTing = (
): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    const {
      fingerprint,
      
    } = store.getState()
    if (!ting) return null
    const db = getFirestore()
    const {ip} = ting

    if (ip) console.log("new ting here.", ting.fingerprint)
    // if (ip){
    //   if (fingerprint){
    //     await setDoc(doc(db, "fingerprints", fingerprint), {
    //       ...fingerprint,
    //       updated: Date.now(),
    //     })
    //   } else {
    //     await setDoc(doc(db, "fingerprints", ting.fingerprint), {
    //       ...ting,
    //       updated: Date.now(),
    //     })
    //   }
    // }
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
