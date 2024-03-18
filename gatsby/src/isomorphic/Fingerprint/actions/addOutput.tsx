import { 
  notify,
  store,
} from "../../../goldlabel"
import {
  setFingerprintKey,
} from "../"

export const addOutput = (
  newOutput: string
): any =>
  async (dispatch: any) => {
    try {
      let op = ""
      const output = store.getState().fingerprint.output
      if (output) op = output
      op = `${op}${op ? "<br />" : ""}${newOutput}`
      dispatch(setFingerprintKey("output", op))
    } catch (e: any) {
      dispatch(notify("addOutput 500", "error", e.toString()))
    }
}
