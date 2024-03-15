import { getFirestore } from "firebase/firestore"
import {
  doc,
  setDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
  setCoreKey,
} from "../../../goldlabel"

export const setFingerprint = (
): any => async (dispatch: any) => {
  try {
    const {tings} = store.getState()
    if (!tings) return false 
    const {ting} = tings
    if (!ting) return false
    const {fingerprint} = ting
    console.log("setFingerprint", fingerprint)
    const updates: any = {
      updated: Date.now(),
      hidden: false,
    }

    console.log("updates", updates)
    // 
    //    
    // 
    // 
    // const {fingerprint} = ting
    // if (!fingerprint) return false
    // const {isNewTing} = core
    // if(isNewTing && fingerprint){
    //   dispatch(setCoreKey("isNewTing", false))
    //   console.log("save fingerprint")
    //   await setDoc(doc(getFirestore(), "fingerprints", fingerprint), ting)
    // }else{
    //   console.log("update fingerprint")
    // }
  } catch (e: any) {
    console.warn(e)
    dispatch(notify("setFingerprint.tsx", "error", e.toString()))
  }
}
