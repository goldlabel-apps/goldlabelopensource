import { 
  getFirestore, 
  doc, 
  getDoc,
} from "firebase/firestore"
import { 
  notify,
  store,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  save,
  update,
} from "../../Fingerprint"
  
export const check = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("checking", true))
      const {uid} = store.getState().fingerprint.data
      const r = doc(getFirestore(), "fingerprints", uid)
      const s = await getDoc(r)
      if (!s.exists()) {
        dispatch(save())
        dispatch(setFingerprintKey("checking", false))
        dispatch(setFingerprintKey("checked", true))
        dispatch(setFingerprintKey("exists", false))
      } else {
        dispatch(update("hits", s.data().hits + 1))
        dispatch(setFingerprintKey("checking", false))
        dispatch(setFingerprintKey("checked", true))
        dispatch(setFingerprintKey("exists", true))
      }
    } catch (e: any) {
      dispatch(notify("check 500", "error", e.toString()))
    }
}