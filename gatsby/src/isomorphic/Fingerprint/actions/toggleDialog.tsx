import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"

export const toggleDialog = (
  open: boolean
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("open", open))
    } catch (e: any) {
      dispatch(notify("toggleDialog 500", "error", e.toString()))
    }
}
