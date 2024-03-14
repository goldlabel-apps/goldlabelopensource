import { 
  notify,
} from "../../../goldlabel"
import {glConfig} from "../../../config"
import {
  fingerprintMake,
  setTingsKey,
  deviceMake,
  iPGeo,
  updateTing,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {

      console.log("init")
      dispatch(setTingsKey("initting", true))

      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("updated", Date.now()))
      dispatch(updateTing("displayName", ""))
      dispatch(updateTing("href", window.location.href))
      dispatch(updateTing("slug", window.location.pathname))
      dispatch(updateTing("docTitle", document.title))

      dispatch(updateTing("siteDisplayname", glConfig.siteDisplayname))
      dispatch(updateTing("siteAvatar", glConfig.siteAvatar))
      dispatch(updateTing("version", glConfig.version))
      dispatch(updateTing("color", glConfig.theme.primaryColor))
      dispatch(updateTing("siteTitle", glConfig.siteTitle))
      dispatch(updateTing("siteUrl", glConfig.siteUrl))

      dispatch(fingerprintMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
