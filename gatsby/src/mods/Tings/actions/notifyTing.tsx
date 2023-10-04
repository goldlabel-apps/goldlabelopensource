import axios from "axios"
import { 
  notify,
  store,
} from "../../../goldlabel"

export const notifyTing = (
  message: string,
): any =>
  async (dispatch: any) => {
    try {
      const {tings, fbId} = store.getState()
      const {fingerprint} = tings
      const ep = `${process.env.REACT_APP_API}notifyr/new`
      const payload = {
        code: "TING",
        severity: "success",
        message,
        fbId,
        fingerprint,
      }
      axios.post(ep, payload)
        .then(function (response) {
          // dispatch(notify("success", "Ting"))
        })
        .catch(function (error) {
          dispatch(notify("error", `${error.toString()}`))
        })
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}