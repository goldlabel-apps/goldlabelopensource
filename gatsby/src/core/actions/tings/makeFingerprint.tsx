import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  store, 
  setPwaKey,
  notify,
  getIPGeo,
} from "../../../core"

export const makeFingerprint = (): any => async (dispatch: any) => {
  try {
    const {core} = store.getState()
    const {tings} = core
    const {host} = tings
    const fp = await FingerprintJS.load()
    const {visitorId} = await fp.get()
    dispatch(setPwaKey({ key: "core", value: {
      ...core,
      tings: {
        ...tings, 
        fingerprint: visitorId,
        uid: `${host}_${visitorId}`
      }
    }}))
    dispatch(getIPGeo())
  } catch (e: any) {
    dispatch(notify(
      "TING502",
      "error", 
      `makeFingerprint ${e.toString()}`
    ))
  }
}
