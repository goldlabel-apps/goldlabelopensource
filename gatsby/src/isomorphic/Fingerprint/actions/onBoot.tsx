import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  resetOutput,
  addOutput,
} from "../"

export const onBoot = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(resetOutput())
      dispatch(addOutput("Fingerprinting..."))
      dispatch(setFingerprintKey("saved", false))
      dispatch(setFingerprintKey("saving", false))
      dispatch(setFingerprintKey("subscribed", false))
      dispatch(setFingerprintKey("subscribing", false))
    } catch (e: any) {
      dispatch(notify("onBoot 500", "error", e.toString()))
    }
}