import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"

export const incoming = (): any =>
  async (dispatch: any) => {
    try {
    //   dispatch(setFingerprintKey("output", null))
    } catch (e: any) {
      dispatch(notify("incoming 500", "error", e.toString()))
    }
}
