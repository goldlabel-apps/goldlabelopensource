import { 
  getFirestore, 
  doc, 
  getDoc,
  setDoc,
} from "firebase/firestore"
import {
  store,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  addOutput,
} from "../../Fingerprint"

export const update = (
  uid: string
): any =>
  async (dispatch: any) => {
    try {
      const r = doc(getFirestore(), "fingerprints2", uid)
      const s = await getDoc(r)
      if (s.exists()) {
        dispatch(addOutput("Updating Fingerprint..."))
        const fp = s.data()
        await setDoc(doc(getFirestore(), "fingerprints2", uid), {
          ...fp,
          updated: Date.now(),
        })
      }
    } catch (e: any) {
      console.log("update error", e.toString())
      // dispatch(notify("save 500", "error", e.toString()))
      return false
    }
}
