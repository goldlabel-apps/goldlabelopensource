import { getFirestore } from "firebase/firestore"
import {
  collection, 
  addDoc,
} from "firebase/firestore"
import { 
  notify,
} from "../../../../goldlabel"

export const saveTing = (
  ting: any,
): any => async (dispatch: any) => {
  try {
    const updatedTing = {
      ...ting,
      updated: Date.now(),
    }
    console.log("updatedTing", updatedTing)
    const db = getFirestore()
    const docRef = await addDoc(collection(db, "fingerprints"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);

  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
