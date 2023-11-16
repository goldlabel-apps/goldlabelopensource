import axios from "axios"
import { 
//   store, 
  notify,
} from "../../../core"
import {
  newPing,
  updatePing,
} from "../../Pingpong"

export const sortPing = (
  uid: string,
): any => async (dispatch: any) => {

  try {
    const ep = `${process.env.REACT_APP_API}pingpong/check-uid`
    axios.post(ep, {uid})
    .then(function (res) {
      let message = "Existing UID"
      if (res.data){ message = res.data.data.data.message}
      const exists = res.data.data.data.exists
      if (!exists) dispatch(newPing())
      if (exists) dispatch(updatePing())
    })
    .catch(function (e) {
      let message = e.toString()
      if (message === "Error: Network Error") message = "API not running"
      dispatch(notify(
        "Listingslab API 522",
        "info", 
        message,
      ))
    })
  } catch (e: any) {
    dispatch(notify(
      "Listingslab API 503",
      "error", 
      `sortPing ${e.toString()}`
    ))
  }
}
