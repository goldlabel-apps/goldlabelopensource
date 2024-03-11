import { getFirestore } from "firebase/firestore"
import {
  deleteDoc,
  doc,
} from "firebase/firestore"
import { 
  store,
  notify,
  resetLocalstorage,
} from "../../../../goldlabel"

export const forgetTing = (): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    if (!ting) return null
    const db = getFirestore()
    const {fingerprint} = ting
    await deleteDoc(doc(db, "fingerprints", fingerprint))
    dispatch(resetLocalstorage())
  } catch (e: any) {
    dispatch(notify("forgetTing 500", "error", e.toString()))
  }
}
