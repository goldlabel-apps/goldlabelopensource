import axios from "axios"
import { 
  notify,
  store,
} from "../../../../goldlabel"

export const newFingerprintNotify = (
  displayName: string,
): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    const ep = `${process.env.REACT_APP_API}email/send`
    const {
      host,
      fingerprint,
    } = ting
    const email = {
      "apiKey": process.env.REACT_APP_API_KEY,
      "to": "listingslab@gmail.com",
      "from": "\"Goldlabel\" <ai@goldlabel.pro>",
      "subject": `${displayName} on ${host}`,
      "html": `<div>
                <a href=https://goldlabel.pro/?fp=${fingerprint}">
                  ${fingerprint}
                </a>
              </div>`,
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
