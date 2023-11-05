import { 
  notify,
} from "../../../core"
import {setPingpongKey} from "../../Pingpong"

export const saveHost = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPingpongKey("host", window.location.host))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 500",
        "error", 
        `saveHost ${e.toString()}`
      ))
    }
}
