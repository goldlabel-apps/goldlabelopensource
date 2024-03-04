import { 
  notify,
  store,
} from "../../../../goldlabel"
import {
  makeFingerprint,
  setTingsKey,
  parseDevice,
} from "../"

export const initTings = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setTingsKey("subscribed", false))
      dispatch(makeFingerprint())
      dispatch(parseDevice())
    } catch (e: any) {
      dispatch(notify("initTings 500", "error", e.toString()))
    }
}
