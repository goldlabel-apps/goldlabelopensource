import { 
  getFirestore,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { 
  notify,  
} from "../../../core"
import {
  setBackofficeKey,
  uidSelect,
} from "../../Backoffice"

export const deleteTing = (fbId: string): any =>
  async (dispatch: any) => {
    try {
      const db = getFirestore()
      const r = doc(db, "tings", fbId)
      await deleteDoc(r)
      dispatch(setBackofficeKey("ting", null))
      dispatch(uidSelect(null))
    } catch (e: any) {
      dispatch(notify(
        "UID 500",
        "error", 
        `deleteTing ${e.toString()}`
      ))
    }
}
