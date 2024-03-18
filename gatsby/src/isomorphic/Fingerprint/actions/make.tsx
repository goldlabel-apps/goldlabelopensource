import axios from "axios"
import FingerprintJS from "@fingerprintjs/fingerprintjs"
import UAParser from "ua-parser-js"
import { 
  store,
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  addOutput,
} from "../../Fingerprint"

export const make = (): any =>
  async (dispatch: any) => {
    try {
      dispatch (addOutput("making."))
      dispatch(setFingerprintKey("making", true))
      const host = window.location.host
      const fp = await FingerprintJS.load()
      const {visitorId} = await fp.get()
      const parser = new UAParser()
      const ua = await parser.getResult()
      let ipgeolocation = null
      const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
      await axios.get(ep)
        .then(function (r) {
          ipgeolocation = r.data
        })
        .catch(function (e) {
          dispatch(notify("ipgeolocation 500", "error", e.toString()))
        })
      const uid = `${host}_${visitorId}`
      const frontmatter = store.getState().core.frontmatter
      const firstFingerprint = {
        created: Date.now(),
        updated: Date.now(),
        frontmatter,
        uid,
        host,
        ua,
        ipgeolocation,
      }
      dispatch(setFingerprintKey("firstFingerprint", firstFingerprint))
      dispatch(setFingerprintKey("made", true))
      dispatch (addOutput("made."))
      return true
    } catch (e: any) {
      dispatch(notify("make 500", "error", e.toString()))
      return false
    }
}
