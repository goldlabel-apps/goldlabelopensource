import {glConfig} from "../../../config"
import { 
  getFirestore, 
  doc, 
  setDoc,
} from "firebase/firestore"
import axios from "axios"
import FingerprintJS from "@fingerprintjs/fingerprintjs"
import UAParser from "ua-parser-js"
import { 
  store,
  notify,
  randomDisplayName,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  addOutput,
  save,
} from "../../Fingerprint"

export const make = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setFingerprintKey("making", true))
      const {
        displayName,
        avatar,
      } = randomDisplayName()
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
      const app = {
        host,
        url: glConfig.siteUrl,
        title: glConfig.siteTitle,
        description: glConfig.siteDescription,
        avatar: glConfig.siteAvatar,
        color: glConfig.isomorphic.theme.color
      }
      const firstFingerprint = {
        uid,
        app,
        displayName,
        avatar,
        ua,
        ipgeolocation,
        frontmatter,
        created: Date.now(),
        updated: Date.now(),
      }
      dispatch(setFingerprintKey("made", true))
      dispatch(addOutput("made."))
      await setDoc(doc(getFirestore(), "fingerprints2", uid), firstFingerprint)
      dispatch(setFingerprintKey("saved", true))
      dispatch(setFingerprintKey("firstFingerprint", firstFingerprint))
      return true
    } catch (e: any) {
      console.log("make 500", e.toString())
      dispatch(notify("make 500", "error", e.toString()))
      return false
    }
}
