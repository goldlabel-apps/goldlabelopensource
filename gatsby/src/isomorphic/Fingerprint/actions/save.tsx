import { 
  getFirestore, 
  doc, 
  getDoc,
  setDoc,
} from "firebase/firestore"
import {
  store,
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  addOutput,
} from "../../Fingerprint"

export const save = (
  uid: string
): any =>
  async (dispatch: any) => {
    try {
      console.log("saving")
      dispatch(setFingerprintKey("saving", true))
      dispatch(addOutput("saving..."))
      const frontmatter = store.getState().core.frontmatter
      const r = doc(getFirestore(), "fingerprints2", uid)
      const s = await getDoc(r)
      if (s.exists()) {
        const existing = s.data()
        const updatedFingerprint = {
          ...existing,
          updated: Date.now(),
          frontmatter,
        }
        await setDoc(doc(getFirestore(), "fingerprints2", uid), updatedFingerprint)
        dispatch(setFingerprintKey("saved", true))
      } else {
        const {firstFingerprint} = store.getState().fingerprint
        await setDoc(doc(getFirestore(), "fingerprints2", uid), firstFingerprint)
        dispatch(setFingerprintKey("saved", true))
      }
    } catch (e: any) {
      dispatch(notify("save 500", "error", e.toString()))
      return false
    }
}