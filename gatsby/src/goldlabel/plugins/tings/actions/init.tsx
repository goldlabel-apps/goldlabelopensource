import { 
  notify,
  store,
} from "../../../../goldlabel"
import {
  fingerprintMake,
  setTingsKey,
  deviceMake,
  // iPGeo,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      console.log("ONCE ONLY")
      dispatch(setTingsKey("initting", true))
      // dispatch(fingerprintMake())      
      // const tings = store.getState().tings
      // const {
      //   fingerprint,
      // } = tings
      // if (!fingerprint){
      //   await 
      // }
      // console.log("fingerprint", fingerprint)
      // 
      // 
      // dispatch(deviceMake())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
