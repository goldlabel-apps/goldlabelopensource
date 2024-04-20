import axios from "axios"
import FingerprintJS from "@fingerprintjs/fingerprintjs"
import UAParser from "ua-parser-js"
import {
  store,
  notify,
} from "../../../goldlabel"
import {
  setFingerprintKey,
  randomDisplayName,
  email,
} from "../"
  
export const make = (): any =>
  async (dispatch: any) => {
    try {
      const isMaking = store.getState().fingerprint.making
      if (!isMaking){
        dispatch(setFingerprintKey("making", true))
        dispatch(setFingerprintKey("made", false))
        const {
          host,
          pathname,
        } = window.location
        const fp = await FingerprintJS.load()
        const {visitorId} = await fp.get()
        const parser = new UAParser()
        const ua = await parser.getResult()
        if (!ua.device.type) ua.device.type = ""
        if (!ua.cpu.architecture) ua.cpu.architecture = ""
        let ipgeolocation: any = null
        let ip: any = null
        const ep = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`
        await axios.get(ep)
          .then(function (r) {
            ipgeolocation = r.data
            if(ipgeolocation) ip = ipgeolocation.ip
          })
          .catch(function (e) {
            dispatch(notify("ipgeolocation 500", "error", e.toString()))
          })
        const uid = `${host}_${ip}_${visitorId}`
        const {
          name,
          avatar,
        } = randomDisplayName()
        // console.log("randomDisplayName()", randomDisplayName())
        const fingerprint = {
          created: Date.now(),
          updated: Date.now(),
          host,
          name,
          avatar,
          uid,
          ua,
          ipgeolocation,
          hits: 1,
          messages:[
            {
              time: Date.now(),
              ball: "ai",
              message: "Hello and welcome"
            }
          ],
          history: [
            {
              time: Date.now(),
              pathname,
              title: document.title
            },
          ]
        }
        dispatch(setFingerprintKey("data", fingerprint))
        dispatch(setFingerprintKey("made", true))
        dispatch(setFingerprintKey("making", false))
        dispatch(email())
      }
    } catch (e: any) {
      dispatch(notify("make 500", "error", e.toString()))
    }
}