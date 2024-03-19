import { 
  getFirestore, 
  doc, 
  deleteDoc
} from "firebase/firestore"
import {
  notify,
  store,
  resetLocalstorage,
} from "../../../goldlabel"

export const remove = (

): any =>
  async (dispatch: any) => {
    try {
      const firstFingerprint = store.getState().fingerprint.firstFingerprint
      const {uid} = firstFingerprint
      const db = getFirestore()
      await deleteDoc(doc(db, "fingerprints2", uid))
      dispatch(resetLocalstorage())
    } catch (e: any) {
      dispatch(notify("remove 500", "error", e.toString()))
      return false
    }
}