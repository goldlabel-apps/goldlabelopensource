import {glConfig} from "../../../config"
import { 
  getFirestore,
  doc,
  deleteDoc,
} from "firebase/firestore"
import { 
  store,
  notify,
  navigate,
} from "../../../goldlabel"
  
export const forget = (): any =>
  async (dispatch: any) => {
    try {
      const {uid} = store.getState().fingerprint.data
      const {version} = glConfig
      if (window.confirm(`All traces of your visit will be removed and you will go away. Thank you for using ${name} ${version}`)) {
          
          dispatch(notify("200", "success", "Forgetting you..."))
          await deleteDoc(doc(getFirestore(), "fingerprints", uid))
          setTimeout(() => {
            localStorage.removeItem(`persist:${version}`)
            dispatch(navigate("https://google.com", "_self"))
          }, 750)
      }
    } catch (e: any) {
      dispatch(notify("check 500", "error", e.toString()))
    }
}