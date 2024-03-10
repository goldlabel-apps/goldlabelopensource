import { 
  notify,
} from "../../../../goldlabel"
import {glConfig} from "../../../../config"
import {
  YourTingMake,
  setTingsKey,
  deviceMake,
  iPGeo,
  updateTing,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("docTitle", document.title))
      dispatch(updateTing("siteAvatar", glConfig.siteAvatar))
      dispatch(updateTing("href", window.location.href))
      dispatch(updateTing("slug", window.location.pathname))
      dispatch(setTingsKey("initting", true))
      dispatch(YourTingMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
