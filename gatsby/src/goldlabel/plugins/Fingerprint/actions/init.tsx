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
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      console.log("init")
      
      dispatch(setTingsKey("initting", true))
      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("displayName", "New Fingerprint"))
      dispatch(updateTing("siteAvatar", glConfig.siteAvatar))
      dispatch(updateTing("href", window.location.href))
      dispatch(updateTing("slug", window.location.pathname))
      dispatch(fingerprintMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
