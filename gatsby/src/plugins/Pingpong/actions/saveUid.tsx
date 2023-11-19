import { 
  notify,
} from "../../../core"
import {setPingpongKey} from "../../Pingpong"

export const saveUid = (
    host: string,
    ip: string,
    fingerprint: string,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPingpongKey("uid", `${host}_${ip}_${fingerprint}`))
      dispatch(setPingpongKey("lastSaved", Date.now()))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 500",
        "error", 
        `saveUid ${e.toString()}`
      ))
    }
}
