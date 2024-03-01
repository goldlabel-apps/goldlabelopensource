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
      console.log("initTing. Once. every load")
      dispatch(setTingsKey("status", "busy"))
      setTimeout(()=>{
        dispatch(setTingsKey("status", "idle"))
      }, 1000)
      // dispatch(fetchIPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
