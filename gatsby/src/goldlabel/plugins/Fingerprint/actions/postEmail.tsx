import axios from "axios"
import { 
  notify,
  store,
} from "../../../../goldlabel"
// import {
//   updateTing,
// } from "../"

export const postEmail = (
): any => async (dispatch: any) => {
  try {
    const ep = `${process.env.REACT_APP_API_LOCAL}email/send`
    const {ting} = store.getState().tings
    console.log("ep", ep, ting)
    const payload = {
      "apiKey": "wxyz-1234-abcd-5678",
      "to": "listingslab@gmail.com",
      "from": "\"Goldlabel\" <ai@goldlabel.pro>",
      "subject": "New YourTing ",
      "html": "<b>YourTing</b> Details of new YourTing",
      "text": "Details of new YourTing"
    }
    axios.post(ep, payload)
      .then(function (res) {
        console.log("res", res)
      })
      .catch(function (e) {
        dispatch(notify("postEmail 500", "error", e.toString()))
      })
  } catch (e: any) {
    dispatch(notify("postEmail 500", "error", e.toString()))
  }
}
