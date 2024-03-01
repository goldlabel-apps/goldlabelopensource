import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../../goldlabel"
// import {setTingsKey} from "../"

export const makeFingerprint = (): any => async (dispatch: any) => {
  try {
    const fp = await FingerprintJS.load()
    const visitor = await fp.get()
    console.log ("makeFingerprint", visitor)
    // const {visitorId} = await fp.get()
    // dispatch(setTingsKey("fingerprint", visitorId))
  } catch (e: any) {
    dispatch(notify("makeFingerprint 500", "error", e.toString()))
  }
}
