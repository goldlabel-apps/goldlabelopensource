import axios from "axios"
import { 
  notify,
} from "../../../core"

export const notifyTing = (
  notification: any,
): any => async (dispatch: any) => {
    try {
      const {code, severity, message} = notification
      const ep = `${process.env.REACT_APP_API}notifyr/new`
      const payload = {
        code,
        severity,
        message,
      }
      axios.post(ep, payload)
        .then(function (res) {
        })
        .catch(function (e) {
          dispatch(notify(
            "TING403",
            "error", 
            `notifyTing ${e.toString()}`
          ))
        })
    } catch (e: any) {
      dispatch(notify(
        "TING402",
        "error", 
        `notifyTing ${e.toString()}`
      ))
    }
}
