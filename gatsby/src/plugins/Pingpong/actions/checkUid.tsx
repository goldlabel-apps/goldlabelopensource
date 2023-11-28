import { getFirestore } from "firebase/firestore"
import { 
  collection, 
  addDoc,
  query, 
  where, 
  getDocs, 
} from "firebase/firestore"
import { 
  notify,
} from "../../../core"
import {
  setPingpongKey,
} from "../../Pingpong"

export const checkUid = (
    uid: string,
): any =>
  async (dispatch: any) => {
    try {
      const db = getFirestore()
      const pingpongRef = collection(db, "pingpong")
      const q = query(pingpongRef, where("uid", "==", uid))
      const snap = await getDocs(q)
      let exists = false
      snap.forEach((doc) => {
        dispatch(setPingpongKey("fbId", doc.id))
        exists = true
      })
      if (!exists){
        const newPing = await addDoc(pingpongRef, {
          uid,
          created: Date.now(),
          hits: 0,
        })
        dispatch(setPingpongKey("fbId", newPing.id))
      }
      dispatch(setPingpongKey("exists", true))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 525",
        "error", 
        `checkUid ${e.toString()}`
      ))
    }
}
