import { 
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore"
import { 
  notify,
  store,
} from "../../../goldlabel"
  
export const update = (
  key: string,
  value: any,
): any =>
  async (dispatch: any) => {
    try {
      const {data} = store.getState().fingerprint
      const {
        uid,
      } = data
      const r = doc(getFirestore(), 'fingerprints', uid)
      setDoc(r, {
        updated: Date.now(),
        [key]: value,
      }, { merge: true })
    } catch (e: any) {
      dispatch(notify("update 500", "error", e.toString()))
    }
}
