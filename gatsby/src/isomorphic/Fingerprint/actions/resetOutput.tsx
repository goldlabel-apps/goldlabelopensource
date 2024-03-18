import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"

export const resetOutput = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("output", null))
    } catch (e: any) {
      dispatch(notify("resetOutput 500", "error", e.toString()))
    }
}
