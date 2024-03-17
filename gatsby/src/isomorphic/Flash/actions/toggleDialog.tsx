import { 
  notify,
} from "../../../goldlabel"
import {
  setFlashKey,
} from "../"

export const toggleDialog = (
  open: boolean
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFlashKey("open", open))
    } catch (e: any) {
      dispatch(notify("toggleDialog 500", "error", e.toString()))
    }
}
