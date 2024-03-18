import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  // addOutput,
} from "../../Fingerprint"

export const checkFingerprint = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("checking", true))
      
      return true
    } catch (e: any) {
      dispatch(notify("checkFingerprint 500", "error", e.toString()))
      return false
    }
}
