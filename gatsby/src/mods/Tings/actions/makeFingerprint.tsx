import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  store, 
  setPwaKey,
  notify,
} from "../../../goldlabel"
import {getIPGeo} from "../"

export const makeFingerprint = (): any =>
async (dispatch: any) => {
  try {
    const {tings} = store.getState()
    const fp = await FingerprintJS.load()
    const { visitorId } = await fp.get()
    dispatch(setPwaKey({ key: "tings", value: {
      ...tings, 
      fingerprint: visitorId,
    }}))
    dispatch(getIPGeo())
  } catch (e: any) {
    dispatch(notify("error", `makeFingerprint ${e.toString()}`))
  }
}
