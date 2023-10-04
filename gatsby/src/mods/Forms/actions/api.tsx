import axios from "axios"
import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const sendMessage = (): any =>
  async (dispatch: any) => {
    try {
      const {contact, tings, fbId} = store.getState()
      const {fingerprint} = tings
      const {message} = contact
      const ep = `${process.env.REACT_APP_API}notifyr/new`
      const payload = {
        code: "CONTACT",
        severity: "success",
        message,
        fbId,
        fingerprint,
      }
      dispatch(setPwaKey({ key: "contact", value: {
        ...contact, 
        sending: true,
        sent: false,
      }}))

      axios.post(ep, payload)
        .then(function (response) {
          dispatch(notify("success", "Direct message sent to listingslab"))
          dispatch(setPwaKey({ key: "contact", value: {
            ...contact,
            message: "",
            valid: false,
            sending: false,
            sent: true,
            lastSent: Date.now(),
            data: response.data,
          }}))
        })
        .catch(function (error) {
          dispatch(setPwaKey({ key: "contact", value: {
            ...contact, 
            sending: false,
            sent: true,
            error,
          }}))
          dispatch(notify("error", `${error.toString()}`))
        })
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}