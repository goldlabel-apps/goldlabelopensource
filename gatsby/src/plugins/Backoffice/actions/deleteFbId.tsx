import { 
  notify,
} from "../../../core"
import { 
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore"
import {
  updateFbId,
} from "../../Backoffice"

export const deleteFbId = (
    collection: string,
    fbId: string,
): any =>
  async (dispatch: any) => {
    try {
      const db = getFirestore()
      await deleteDoc(doc(db, collection, fbId))
      dispatch(updateFbId(null))
      dispatch(notify(
        `Backoffice 200 ${fbId}`,
        "success", 
        "Deleted."
      ))

    } catch (e: any) {
      dispatch(notify(
        "Backoffice 509",
        "error", 
        `deleteFbId ${e.toString()}`
      ))
    }    
}
