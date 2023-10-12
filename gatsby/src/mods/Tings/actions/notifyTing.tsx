import axios from "axios"
import { 
  notify,
} from "../../../goldlabel"

export const notifyTing = (
  message: string,
): any =>
  async (dispatch: any) => {
    try {
      const ep = `${process.env.REACT_APP_API}notifyr/new`
      // const ep2 = `${process.env.REACT_APP_API}notifyr/send`
      const payload = {
        code: "FINGERPRINT",
        host: window.location.host,
        severity: "success",
        message,
      }
      axios.post(ep, payload)
        .then(function () {
          // axios.get(ep2)
        })
        .catch(function (e) {
          dispatch(notify("error", `notifyTing ${e.toString()}`))
        })
    } catch (e: any) {
      dispatch(notify("warning", e))
    }
}
