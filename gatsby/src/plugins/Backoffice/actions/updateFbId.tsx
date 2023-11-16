import { 
  notify,
} from "../../../core"
import {setBackofficeKey} from "../../Backoffice"

export const updateFbId = (
    fbId: string|null,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setBackofficeKey("fbId", fbId))
    } catch (e: any) {
      dispatch(notify(
        "Backoffice 507",
        "error", 
        `updateFbId ${e.toString()}`
      ))
    }    
}
