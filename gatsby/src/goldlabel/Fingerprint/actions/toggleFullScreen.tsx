import { 
  notify,
} from "../../../goldlabel"
import {
  setTingsKey,
} from "../"

export const toggleFullScreen = (
  dialogOpen: boolean
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setTingsKey("dialogOpen", dialogOpen))
    } catch (e: any) {
      dispatch(notify("toggleFullScreen 500", "error", e.toString()))
    }
}
