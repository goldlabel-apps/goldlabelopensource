import FingerprintJS from "@fingerprintjs/fingerprintjs"
import { 
  store, 
  setPwaKey,
  notify,
  getIPGeo,
  getUserAgent,
} from "../../../core"

export const makeFingerprint = (): any => async (dispatch: any) => {
  try {
    const {core} = store.getState()
    const {tings} = core
    const {host, ipGeo} = tings
    const fp = await FingerprintJS.load()
    const {visitorId} = await fp.get()
    const uid = `${host}_${ipGeo.ip}_${visitorId}`

    dispatch(setPwaKey({ key: "core", value: {
      ...core,
      tings: {
        ...tings, 
        fingerprint: visitorId,
        uid,
      }
    }}))
    dispatch(getUserAgent())
  } catch (e: any) {
    dispatch(notify(
      "TING502",
      "error", 
      `makeFingerprint ${e.toString()}`
    ))
  }
}
