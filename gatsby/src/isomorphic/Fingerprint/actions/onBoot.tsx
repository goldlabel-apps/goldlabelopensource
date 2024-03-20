import { 
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  resetOutput,
  addOutput,
} from "../"

export const onBoot = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(resetOutput())
      dispatch(addOutput("..."))
      dispatch(setFingerprintKey("saved", false))
      dispatch(setFingerprintKey("saving", false))
    } catch (e: any) {
      console.log("onBoot 500", e.toString())
      dispatch(notify("onBoot 500", "error", e.toString()))
    }
}
