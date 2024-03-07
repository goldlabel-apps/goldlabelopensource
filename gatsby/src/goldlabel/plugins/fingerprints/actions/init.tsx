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
      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("docTitle", document.title))
      dispatch(updateTing("siteIcon", glConfig.siteIcon))
      dispatch(updateTing("href", window.location.href))
      dispatch(setTingsKey("initting", true))
      dispatch(fingerprintMake())
      dispatch(deviceMake())
      dispatch(iPGeo())
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
