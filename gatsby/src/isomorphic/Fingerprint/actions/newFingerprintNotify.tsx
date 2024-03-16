import axios from "axios"
import { 
  notify,
  store,
} from "../../../goldlabel"

export const makeEmailHTML = (ting: any) => {
  const {
    fingerprint,
    countryName,
    avatarSrc,
    city,
    countryCode,
    siteAvatar,
    siteUrl,
    browser,
    browserEngine,
    os,
    isp,
    href,
    vendor,
    deviceModel,
    deviceType,
  } = ting

  return `<div>
            <a href="https://goldlabel.pro/?fp=${fingerprint}">
              <img src="https://goldlabel.pro/iOS.svg" 
                  width="60" 
                  height="60" />
            </a><a href="${href}">
              <img src="${siteAvatar}" width="60" height="60" />
            </a><img 
              src="${avatarSrc}" 
              width="60" height="60" /><img 
              src="${siteUrl}/svg/flags/${countryCode}.svg" 
              width="60" height="60" />
            <p>${city || ""} ${countryName || ""}</p>
            <p>${isp || ""}</p>
            <p>${os || ""} ${browser || ""} ${browserEngine || ""} 
            ${vendor || ""} ${deviceType || ""} ${deviceModel || ""}
            </p>
          </div>`
}

export const newFingerprintNotify = (): any => async (dispatch: any) => {
  try {
    const {ting} = store.getState().tings
    const {
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
      .then(function (res) {})
      .catch(function (e) {
        console.log("postEmail error", e)
      })
  } catch (e: any) {
    dispatch(notify("newFingerprintNotify 500", "error", e.toString()))
  }
}
