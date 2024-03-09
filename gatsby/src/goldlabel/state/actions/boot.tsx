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
      if (sinceBoot > 750) {
        console.log("boot.")
        dispatch(setPwaKey({ key: "bootTime", value: uTime })) 
      }
    } catch (e: any) {
      dispatch(notify("boot 500","error", e.toString()))
    }
  }
