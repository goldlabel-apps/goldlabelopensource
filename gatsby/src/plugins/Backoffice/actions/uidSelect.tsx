import { 
  notify,
} from "../../../core"
import {setBackofficeKey} from "../../Backoffice"
export const uidSelect = (uid: string|null): any =>
  async (dispatch: any) => {
    try {
        // console.log("hey", uid)
        dispatch(setBackofficeKey("uid", uid))
    } catch (e: any) {
      dispatch(notify(
        "UID 500",
        "error", 
        `uidSelect ${e.toString()}`
      ))
    }
}
