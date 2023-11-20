import axios from "axios"
import { 
//   store, 
  notify,
} from "../../../core"
import {
  frebaseNew,
  firebaseUpdate,
} from "../../Pingpong"

export const firebaseDecide = (
  uid: string,
): any => async (dispatch: any) => {

  try {
    const ep = `${process.env.REACT_APP_API}pingpong/check-uid`
    axios.post(ep, {uid})
    .then(function (res) {
      let message = "Existing UID"
      if (res.data){ message = res.data.data.data.message}
      const exists = res.data.data.data.exists
      if (!exists) dispatch(frebaseNew())
      if (exists) dispatch(firebaseUpdate())
    })
    .catch(function (e) {
      let message = e.toString()
      // if (message === "Error: Network Error") message = "API not running"
      dispatch(notify(
        "Listingslab API 522",
        "error", 
        message,
      ))
    })
  } catch (e: any) {
    dispatch(notify(
      "Listingslab API 503",
      "error", 
      `firebaseDecide ${e.toString()}`
    ))
  }
}
