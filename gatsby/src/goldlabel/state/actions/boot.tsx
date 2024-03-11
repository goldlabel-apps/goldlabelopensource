// import { AppThunk } from "../state/store"
import {
  setPwaKey,
  store,
  notify,
} from "../../../goldlabel"
import {
  postEmail
} from "../../../goldlabel/plugins/Fingerprint"

export const boot = (): any => async (dispatch: any) => {
    try {
      console.log("check if this was a new fingerprint")
      const uTime = Date.now()
      const sinceBoot = uTime - store.getState().bootTime
      if (sinceBoot > 750) {
        dispatch(setPwaKey({ key: "bootTime", value: uTime })) 
      } else {
        setTimeout(() => {
          const {tings} = store.getState()
          dispatch(postEmail({fsadkhf:23}))
          // console.log("postEmail", tings.ting.displayName)
        }, 750)
      }
    } catch (e: any) {
      dispatch(notify("boot 500","error", e.toString()))
    }
  }
