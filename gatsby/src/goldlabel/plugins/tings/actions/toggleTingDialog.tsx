import { 
  notify,
} from "../../../../goldlabel"
import {
  setTingsKey,
} from "../"

export const toggleTingDialog = (
  dialogOpen: boolean
): any =>
  async (dispatch: any) => {
    try {
        dispatch(setTingsKey("dialogOpen", dialogOpen))
    } catch (e: any) {
      dispatch(notify("toggleTingDialog 500", "error", e.toString()))
    }
}
