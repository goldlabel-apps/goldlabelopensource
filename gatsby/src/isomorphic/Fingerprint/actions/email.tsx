import axios from "axios"
import { 
  notify,
  store,
} from "../../../goldlabel"

export const makeEmailHTML = (data: any) => {
  const {
    uid,
    avatar,
    ipgeolocation,
  } = data
  const {
    country_emoji,
  } = ipgeolocation
  return `
    <div>
      <a href="https://goldlabel.pro/?uid=${uid}">
        <img align="left" width="25" height="25" src="${avatar}" />
      </a>
      ${country_emoji}
      <a href="https://goldlabel.pro/?uid=${uid}">
       goldlabel.pro 
      </a>
    </div>
  `
}

export const email = (): any => async (dispatch: any) => {
  try {
    const {data} = store.getState().fingerprint
    const {name} = data
    const endpoint = `${process.env.REACT_APP_API}email/send`
    const html = makeEmailHTML(data)
    const email = {
      apiKey: process.env.REACT_APP_API_KEY,
      to: "listingslab@gmail.com",
      from: "\"Goldlabel\" <ai@goldlabel.pro>",
      subject: `${name}`,
      text: "Text emails not supported",
      html,
    }
    axios.post(endpoint, email)
      .then(function (res) {
        console.log("email sent")
      })
      .catch(function (e) {
        console.log("email error", e)
      })
  } catch (e: any) {
    dispatch(notify("email 500", "error", e.toString()))
  }
}


/*
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
*/