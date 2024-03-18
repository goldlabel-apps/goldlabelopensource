import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  resetOutput,
  addOutput,
} from "../"

export const reset = (): any =>
  async (dispatch: any) => {
    try {
      // console.log("resetting")
      dispatch(resetOutput())
      dispatch(addOutput("Fingerprinting..."))
      dispatch(setFingerprintKey("saved", false))
      dispatch(setFingerprintKey("subscribed", false))
    } catch (e: any) {
      dispatch(notify("reset 500", "error", e.toString()))
    }
}
