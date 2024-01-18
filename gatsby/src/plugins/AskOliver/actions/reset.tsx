import { 
  notify,
} from "../../../core"
import {
  setAskOliverKey,
} from "../"

export const reset = (): any => async (dispatch: any) => {
  try {
    dispatch(setAskOliverKey("fetchingList", false))
    dispatch(setAskOliverKey("fetchedList", false))
    dispatch(setAskOliverKey("prompt", null))
    dispatch(setAskOliverKey("list", []))
    dispatch(setAskOliverKey("error", null))
  } catch (e: any) {
    dispatch(notify(
      "AskOliver 603",
      "error", 
      `reset AskOliver ${e.toString()}`
    ))
  }
}
