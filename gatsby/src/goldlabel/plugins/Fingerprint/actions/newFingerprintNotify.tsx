import axios from "axios"
import { 
  notify,
  store,
} from "../../../../goldlabel"

export const newFingerprintNotify = (): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    const ep = `${process.env.REACT_APP_API}email/send`
    const {
      host,
      fingerprint,
      city,
      displayName,
    } = ting
    if (city === "Mountain View") return false

    const email = {
      "apiKey": process.env.REACT_APP_API_KEY,
      "to": "listingslab@gmail.com",
      "from": "\"Goldlabel\" <ai@goldlabel.pro>",
      "subject": `${host} > ${displayName || ""}`,
      "html": `<p>
                <a href="https://goldlabel.pro/?fp=${fingerprint}">
                  View
                </a>
              </p>`,
      "text": `${fingerprint}`
    }
    axios.post(ep, email)
      .then(function (res) {
        // console.log("res", res.data)
      })
      .catch(function (e) {
        console.log("postEmail error", e)
      })
  } catch (e: any) {
    dispatch(notify("newFingerprintNotify 500", "error", e.toString()))
  }
}
