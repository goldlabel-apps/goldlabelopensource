import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  notify,
} from "../../../core"
import {setPingpongKey} from "../../Pingpong"

export const makeFingerprint = (): any => async (dispatch: any) => {
  try {
    const fp = await FingerprintJS.load()
    const {visitorId} = await fp.get()
    dispatch(setPingpongKey("fingerprint", visitorId))
  } catch (e: any) {
    dispatch(notify(
      "Pingpong 502",
      "error", 
      `makeFingerprint ${e.toString()}`
    ))
  }
}
