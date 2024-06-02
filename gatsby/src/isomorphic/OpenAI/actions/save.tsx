import { 
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore"
import { 
  notify,
  // store,
} from "../../../goldlabel"
// import {
//   setOpenaiKey,
// } from "../"

export const save = (
  chat: any,
): any =>
  async (dispatch: any) => {
    try {
      await addDoc(collection(getFirestore(), "openai"), chat)
    } catch (e: any) {
      dispatch(notify("save 500", "error", e.toString()))
    }
}
