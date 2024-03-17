import { 
  notify,
} from "../../../goldlabel"
import {
  setThemeKey,
} from "../"

export const toggleDialog = (
  open: boolean
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setThemeKey("open", open))
    } catch (e: any) {
      dispatch(notify("toggleDialog 500", "error", e.toString()))
    }
}
