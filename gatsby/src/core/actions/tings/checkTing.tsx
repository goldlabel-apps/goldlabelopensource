import { 
  collection, 
  query, 
  where, 
  getDocs,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  store,
  createTing,
  updateTing,
} from "../../../core"

export const checkTing = (): any => async (dispatch: any) => {
    try {
        const {core} = store.getState()
        const {tings} = core
        const {host, fingerprint, ipGeo} = tings
        const uid = `${host}_${ipGeo.ip}_${fingerprint}`
        const db = getFirestore()
        const q = query(collection(db, "pingpong"), where("uid", "==", uid))
        const snap = await getDocs(q)
        let existing: any = null
        snap.forEach((doc) => {
          existing = {
            fbId: doc.id,
            ...doc.data(),
          }
        })
        if(host !== "localhost:8000"){
          if (!existing){
            dispatch(createTing(tings))
          } else {
            dispatch(updateTing(existing.fbId))
          }
        }
    } catch (e: any) {
      dispatch(notify(
        "TC 0",
        "error", 
        `checkTing ${e.toString()}`
      ))
    }
}
