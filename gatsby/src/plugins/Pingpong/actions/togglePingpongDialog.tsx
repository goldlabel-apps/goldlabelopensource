import { 
  notify,
} from "../../../core"
import {setPingpongKey} from "../../Pingpong"

export const togglePingpongDialog = (
  open: boolean
): any =>
  async (dispatch: any) => {
    try {
        dispatch(setPingpongKey("pingpongDialog", open))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 500",
        "error", 
        `togglePingpongDialog ${e.toString()}`
      ))
    }
}
