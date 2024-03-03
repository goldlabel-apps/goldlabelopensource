import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../../goldlabel"
import {
  setTingsKey,
  updateTing,
} from "../"

export const makeFingerprint = (): any => async (dispatch: any) => {
  try {
    const fp = await FingerprintJS.load()
    const {visitorId} = await fp.get()
    const host = window.location.host
    const fingerprint = `${host}_${visitorId}`
    dispatch(setTingsKey("host", host))
    dispatch(setTingsKey("fingerprint", fingerprint))
    dispatch(updateTing("fingerprint", fingerprint))
  } catch (e: any) {
    dispatch(notify("makeFingerprint 500", "error", e.toString()))
  }
}
