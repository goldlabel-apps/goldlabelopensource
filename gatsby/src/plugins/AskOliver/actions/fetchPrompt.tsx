import axios from "axios"
import { 
  store, 
  // setPwaKey,
  notify,
} from "../../../core"
import {
  setAskOliverKey,
} from "../"

export const fetchPrompt = (): any => async (dispatch: any) => {
  try {
    const askoliver = store.getState().askoliver
    dispatch(setAskOliverKey("fetching", true))
    const {
      locale, 
      prompt,
    } = askoliver
    const payload = {
        locale,
        prompt,
    }
    const ep = `${process.env.REACT_APP_API}askoliver/prompt`
    axios.post(ep, payload)
      .then(function (res) {
        if (res.data){
          dispatch(setAskOliverKey("chat", res.data.data))
        }
        dispatch(setAskOliverKey("fetching", false))
        dispatch(setAskOliverKey("fetched", true))
      })
      .catch(function (e) {
        dispatch(setAskOliverKey("error", e))
        dispatch(setAskOliverKey("fetching", false))
        dispatch(setAskOliverKey("fetched", true))
        dispatch(notify(
          "chatGPT 602",
          "error", 
          `fetchChatGPT ${e.toString()}`
        ))
      })

  } catch (e: any) {
    dispatch(notify(
      "AskOliver 603",
      "error", 
      `fetchPrompt ${e.toString()}`
    ))
  }
}
