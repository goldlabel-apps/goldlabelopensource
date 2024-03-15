import axios from "axios"
import { 
  notify,
  randomDisplayName,
} from "../../../goldlabel"
import {glConfig} from "../../../config"
import {
  fingerprintMake,
  setTingsKey,
  deviceMake,
  updateTing,
  // newFingerprintNotify,
} from "../"

export const init = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setTingsKey("initDone", true))
      const messages = [
        {
          time: Date.now(),
          to: "to name",
          from: "from name",
          message: "Lorem Ipsum dolar immet",
        },
      ]
      const history = [
        {
          href: window.location.href,
          slug: window.location.pathname,
          title: document.title
        },
      ]
      const app = [
        {
          version: glConfig.version,
          appName: glConfig.siteDisplayname,
          appUrl: glConfig.appUrl,
          appAvatar: glConfig.siteAvatar,
          appTitle: glConfig.siteTitle,
          appColor: glConfig.theme.primaryColor,
        },
      ]
      dispatch(updateTing("created", Date.now()))
      dispatch(updateTing("updated", Date.now()))
      dispatch(updateTing("messages", messages))
      dispatch(updateTing("history", history))
      dispatch(updateTing("app", app))
      dispatch(fingerprintMake())
      dispatch(deviceMake())
      // dispatch(iPGeo())

      
    } catch (e: any) {
      dispatch(notify("init 500", "error", e.toString()))
    }
}
