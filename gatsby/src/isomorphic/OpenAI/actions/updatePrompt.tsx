import { 
  notify,
} from "../../../goldlabel"
import {
  setOpenaiKey,
} from "../"

export const updatePrompt = (
  prompt: string,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setOpenaiKey("prompt", prompt))
    } catch (e: any) {
      dispatch(notify("updatePrompt 500", "error", e.toString()))
    }
}
