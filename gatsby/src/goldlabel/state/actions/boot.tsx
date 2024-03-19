import {
  setPwaKey,
  store,
  notify,
} from "../../../goldlabel"
import {onBoot} from "../../../isomorphic/Fingerprint"

export const boot = (): any => async (dispatch: any) => {
    try {
      const uTime = Date.now()
      const sinceBoot = uTime - store.getState().bootTime
      if (sinceBoot > 750) {
        dispatch(setPwaKey({ key: "bootTime", value: uTime }))
        dispatch(onBoot())
      }
    } catch (e: any) {
      dispatch(notify("boot 500","error", e.toString()))
    }
  }
