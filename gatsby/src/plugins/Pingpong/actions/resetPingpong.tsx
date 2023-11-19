import { 
  notify,
  setPwaKey,
} from "../../../core"
import {pingpongState} from "../"

export const resetPingpong = (): any =>
  async (dispatch: any) => {
    try {
        dispatch(setPwaKey({key: "pingpong", value: pingpongState}))
        dispatch(notify(
          "Pingpong 200",
          "warning", 
          "Pingpong reset",
        ))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong RESET 500",
        "error", 
        `resetPingpong ${e.toString()}`
      ))
    }
}
