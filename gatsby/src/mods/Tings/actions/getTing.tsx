import axios from "axios"
import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const getTing = (): any =>
  async (dispatch: any) => {
    try {
      const {tings} = store.getState()
      console.log("getTing", tings)
    //   const {
    //     host,
    //     ipGeo,
    //     userAgent,
    //     fingerprint,
    //   } = tings
    //   if (Date.now() - bootTime < 1000){
    //     // if (host && ipGeo && userAgent && fingerprint) 
        
    //   }
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
