import { 
  notify,
} from "../../../goldlabel"
import {
  setGeoKey,
} from "../"

export const toggleDialog = (
  open: boolean
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setGeoKey("open", open))
    } catch (e: any) {
      dispatch(notify("toggleDialog 500", "error", e.toString()))
    }
}
