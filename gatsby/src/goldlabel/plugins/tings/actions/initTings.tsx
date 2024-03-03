import { 
  notify,
  store,
} from "../../../../goldlabel"
import {
  makeFingerprint,
} from "../"

export const initTings = (): any =>
  async (dispatch: any) => {
    try {
      const tings = store.getState().tings
      const {fingerprint} = tings
      if (!fingerprint) dispatch(makeFingerprint())  
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
