import { 
  notify,
} from "../../../../goldlabel"
import {
  setTingsKey,
  fetchIPGeo,
} from "../"

export const initTing = (): any =>
  async (dispatch: any) => {
    try {
      console.log("initTing")
      dispatch(setTingsKey("status", "busy"))
      dispatch(fetchIPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
