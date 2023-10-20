import { 
    doc, 
    setDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { 
  notify,
  notifyTing,
} from "../../../core"

export const updateTing = (fbId: any): any =>
  async (dispatch: any) => {
    try {
      const currentPage = {
        title: document.title,
        slug: window.location.pathname,
        url: window.location.href,
      }
      const db = getFirestore() 
      const fpRef = doc(db, 'pingpong', fbId)
      await setDoc(fpRef, {
        updated: Date.now(),
        currentPage,
      }, { merge: true })

      // dispatch(notifyTing({
      //   code: "UPDATED TING",
      //   severity: "success",
      //   message: `fbId ${fbId}`,
      // }))

    } catch (e: any) {
      dispatch(notify(
        "TING201",
        "error", 
        `updateTing ${e.toString()}`
      ))
    }
}
