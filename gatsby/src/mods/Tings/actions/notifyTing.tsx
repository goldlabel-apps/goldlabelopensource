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
      const {tings} = store.getState()
      const {host} = tings
      // const {country_name_official} = ipGeo
      // console.log("ipGeo", ipGeo)
      const ep = `${process.env.REACT_APP_API}notifyr/new`
      const payload = {
        code: `${host}`,
        severity: "success",
        message,
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