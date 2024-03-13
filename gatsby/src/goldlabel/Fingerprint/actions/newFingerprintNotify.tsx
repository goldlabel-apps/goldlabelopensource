import axios from "axios"
import { 
  notify,
  store,
} from "../../../goldlabel"

export const makeEmailHTML = (ting: any) => {
  console.log("makeEmailHTML", ting)
  const {
    fingerprint,
    displayName,
    siteAvatar,
  } = ting

  /*
{
    "displayName": "Hippy 944",
    "created": 1710352576109,
    "updated": 1710352576109,
    "siteAvatar": "https://free.goldlabel.pro/svg/iOS.svg",
    "href": "http://localhost:8000/",
    "slug": "/",
    "bigSmall": "big",
    "browser": "Chrome",
    "browserVs": "122.0.0.0",
    "browserEngine": "Blink",
    "os": "Mac OS",
    "osVs": "10.15.7",
    "vendor": "Apple",
    "deviceModel": "Macintosh",
    "deviceType": "",
    "avatarSrc": "/svg/characters/hippy.svg",
    "ip": "86.160.136.18",
    "languages": "en-GB,cy-GB,gd",
    "timeZone": "Europe/London",
    "city": "Birmingham",
    "state": "England",
    "countryEmoji": "🇬🇧",
    "countryCode": "gb",
    "countryName": "United Kingdom",
    "isEu": false,
    "currency": "Pound Sterling £",
    "isp": "BT Public Internet Service",
    "lat": "52.47387",
    "lng": "-1.89220",
    "host": "localhost:8000",
    "fingerprint": "localhost:8000_e88c7bd93df9597a7d7cf5a2e4b6bdb7"
}
  */
  return `<div>
            <h2>${displayName}</h2>
            <img src="${siteAvatar}" />
            <a href="https://goldlabel.pro/?fp=${fingerprint}">
              Goldlabel.pro
            </a>
          </div>`
}

export const newFingerprintNotify = (): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    const {
      fingerprint,
      city,
      displayName,
      countryEmoji,
    } = ting
    if (city === "Mountain View") return false

    const endpoint = `${process.env.REACT_APP_API}email/send`
    const html = makeEmailHTML(ting)
    const email = {
      apiKey: process.env.REACT_APP_API_KEY,
      to: "listingslab@gmail.com",
      from: "\"Goldlabel\" <ai@goldlabel.pro>",
      subject: `${countryEmoji || ""} ${displayName || ""}`,
      text: "Text emails not supported",
      html,
    }
    axios.post(endpoint, email)
      .then(function (res) {
        dispatch(notify("newFingerprintNotify 200", "success", "App owner notified"))
      })
      .catch(function (e) {
        console.log("postEmail error", e)
      })
  } catch (e: any) {
    dispatch(notify("newFingerprintNotify 500", "error", e.toString()))
  }
}
