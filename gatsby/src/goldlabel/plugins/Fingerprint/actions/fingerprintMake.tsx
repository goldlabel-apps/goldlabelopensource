import YourTingJS from "@YourTingjs/YourTingjs"
import { 
  notify,
} from "../../../../goldlabel"
import {
  updateTing,
} from "../"

export const fingerprintMake = (): any => async (dispatch: any) => {
  try {
    const fp = await YourTingJS.load()
    const {visitorId} = await fp.get()
    const host = window.location.host
    const YourTing = `${host}_${visitorId}`
    dispatch(updateTing("host", host))
    dispatch(updateTing("YourTing", YourTing))
  } catch (e: any) {
    dispatch(notify("YourTingMake 500", "error", e.toString()))
  }
}
