import { getFirestore } from "firebase/firestore"
import {
  doc,
  setDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
  setCoreKey,
} from "../../goldlabel"
import {
  setFingerprint,
} from "../"

export const saveTing = (
): any => async (dispatch: any) => {
  try {
    const {tings, core} = store.getState()
    if (!tings) return false    
    const {ting} = tings
    if (!ting) return false
    const {fingerprint} = ting
    if (!fingerprint) return false
    const {isNewTing} = core
    if (isNewTing && fingerprint) {
      dispatch(setCoreKey("isNewTing", false))
      await setDoc(doc(getFirestore(), "fingerprints", fingerprint), ting)
    } else { dispatch(setFingerprint()) }
  } catch (e: any) {
    dispatch(notify("saveTing.tsx", "error", `saveTing.tsx ${e.toString()}`))
  }
}
