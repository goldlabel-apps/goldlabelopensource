import { 
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore"
import { 
  notify,
  store,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"
  
export const save = (): any =>
  async (dispatch: any) => {
    try {
      const {data} = store.getState().fingerprint
      const {
        uid,
        // name,
      } = data
      await setDoc(doc(getFirestore(), "fingerprints", uid), data)
      // dispatch(setFingerprintKey("open", true))
      // dispatch(notify("Change your name?", "success", `Hello ${name}. Change your name?`))
      dispatch(setFingerprintKey("exists", true))
    } catch (e: any) {
      dispatch(notify("save 500", "error", e.toString()))
    }
}
