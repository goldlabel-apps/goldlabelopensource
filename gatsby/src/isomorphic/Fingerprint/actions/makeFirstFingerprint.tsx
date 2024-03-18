import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  // addOutput,
} from "../../Fingerprint"

export const makeFirstFingerprint = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("making", true))
      const fp = await FingerprintJS.load()
      const {visitorId} = await fp.get()
      const host = window.location.host
      const uid = `${host}_${visitorId}`
      const firstFingerprint = {
        created: Date.now(),
        uid,
      }
      dispatch(setFingerprintKey("firstFingerprint", firstFingerprint))
      return true
    } catch (e: any) {
      dispatch(notify("makeFirstFingerprint 500", "error", e.toString()))
      return false
    }
}
