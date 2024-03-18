import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"

export const setOutput = (
  output: string
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("output", output))
    } catch (e: any) {
      dispatch(notify("setOutput 500", "error", e.toString()))
    }
}
