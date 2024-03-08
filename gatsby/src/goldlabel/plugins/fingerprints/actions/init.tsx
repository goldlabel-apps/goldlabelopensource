import { 
  notify,
} from "../../../../goldlabel"
import {glConfig} from "../../../../config"
import {
  fingerprintMake,
  setTingsKey,
  deviceMake,
  iPGeo,
  updateTing,
  postEmail,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(updateTing("displayName", glConfig.siteDisplayname))
      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("docTitle", document.title))
      dispatch(updateTing("siteAvatar", glConfig.siteAvatar))
      dispatch(updateTing("href", window.location.href))
      dispatch(setTingsKey("initting", true))
      dispatch(fingerprintMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
      
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
