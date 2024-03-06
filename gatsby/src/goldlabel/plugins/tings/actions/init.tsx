import { 
  notify,
} from "../../../../goldlabel"
import {
  fingerprintMake,
  setTingsKey,
  deviceMake,
  iPGeo,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      // console.log("init")
      dispatch(setTingsKey("initting", true))
      dispatch(fingerprintMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
