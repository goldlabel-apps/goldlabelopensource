import { UAParser } from 'ua-parser-js';
import { 
    store, 
    setPwaKey,
} from "../../../goldlabel"

export const getUserAgent = (): any =>
  async (dispatch: any) => {
    try {
      const {tings} = store.getState()
      const ua = window.navigator.userAgent
      const userAgent = UAParser(ua)
      // @ts-ignore
      delete userAgent.ua
      dispatch(setPwaKey({ key: "tings", value: {
        ...tings,
        userAgent,
      }}))
    } catch (error: any) {
      console.log("Action error: getUserAgent", error)
    }
  }
  