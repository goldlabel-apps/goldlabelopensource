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
      if (!fingerprint) {
        
        dispatch(makeFingerprint())
      }
      // dispatch(setTingsKey("status", "busy"))
      // setTimeout(()=>{
      //   dispatch(setTingsKey("status", "idle"))
      // }, 1000)
      // dispatch(fetchIPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
