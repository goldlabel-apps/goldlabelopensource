// import { AppThunk } from "../state/store"
import {
  setPwaKey,
  store,
  notify,
} from "../../../goldlabel"

export const boot = (): any => async (dispatch: any) => {
    try {
      const uTime = Date.now()
      const sinceBoot = uTime - store.getState().bootTime
      const newFingerprint = store.getState().newFingerprint
      if (sinceBoot > 750) {
        dispatch(setPwaKey({ key: "bootTime", value: uTime }))
        if (newFingerprint){
          console.log("IS NEW! SEND MAIL.")
          dispatch(setPwaKey({ key: "newFingerprint", value: false }))
        }
        if (!newFingerprint) console.log("NOT NEW")
      }
    } catch (e: any) {
      dispatch(notify("boot 500","error", e.toString()))
    }
  }
