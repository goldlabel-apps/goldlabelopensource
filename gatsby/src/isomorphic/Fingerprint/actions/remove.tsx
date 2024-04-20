import { 
  getFirestore,
  doc,
  deleteDoc,
} from "firebase/firestore"
import {
  notify,
} from "../../../goldlabel"
  
export const remove = (
  uid: string,
): any =>
  async (dispatch: any) => {
    try {
      // console.log("remove", uid)
      await deleteDoc(doc(getFirestore(), "fingerprints", uid))
    } catch (e: any) {
      dispatch(notify("remove 500", "error", e.toString()))
    }
}