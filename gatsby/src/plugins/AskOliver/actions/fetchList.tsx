import axios from "axios"
import {
  notify,
} from "../../../core"
import {
  setAskOliverKey,
} from "../"

export const fetchList = (): any => async (dispatch: any) => {
  try {
    dispatch(setAskOliverKey("fetchingList", true))
    const ep = `${process.env.REACT_APP_2ND_API}/openai`
    axios.get(ep)
      .then(function (res) {
        dispatch(setAskOliverKey("list", res.data.response.data.list))
        dispatch(setAskOliverKey("fetchingList", false))
        dispatch(setAskOliverKey("fetchedList", true))
      })
      .catch(function (e) {
        dispatch(setAskOliverKey("error", e))
        dispatch(setAskOliverKey("fetchingList", false))
        dispatch(setAskOliverKey("fetchedList", true))
      })

  } catch (e: any) {
    dispatch(notify(
      "Ask Oliver 603",
      "error", 
      `fetchList ${e.toString()}`
    ))
    dispatch(setAskOliverKey("error", e))
    dispatch(setAskOliverKey("fetchingList", false))
    dispatch(setAskOliverKey("fetchedList", true))
  }
}
