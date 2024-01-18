import axios from "axios"
import { 
  store, 
  // setPwaKey,
  notify,
} from "../../../core"
import {
  setAskOliverKey,
} from "../"

export const ask = (): any => async (dispatch: any) => {
  try {
    const askoliver = store.getState().askoliver
    // console.log("askoliver", askoliver)
    dispatch(notify(
      "chatGPT 702",
      "info", 
      "chatGPT not connected"
    ))
    // dispatch(setAskOliverKey("fetching", true))
    // const {
    //   locale, 
    //   prompt,
    // } = askoliver
    // const payload = {
    //     locale,
    //     prompt,
    // };
    // const ep = `${process.env.REACT_APP_API}askoliver/ask`
    // axios.post(ep, payload)
    //   .then(function (res) {
    //   });
    //   .catch(function (e) {
    //     dispatch(notify(
    //       "chatGPT 702",
    //       "error", 
    //       `fetchChatGPT ${e.toString()}`
    //     ))
    //   })

  } catch (e: any) {
    dispatch(notify(
      "AskOliver 703",
      "error", 
      `fetchPrompt ${e.toString()}`
    ))
  }
}
