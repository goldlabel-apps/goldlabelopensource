import { UAParser } from 'ua-parser-js';
import { 
    store, 
    setPwaKey,
    notify,
} from "../../../core"

export const getUserAgent = (): any => async (dispatch: any) => {
    try {
      const {core} = store.getState()
      const {tings} = core
      const ua = window.navigator.userAgent
      const userAgent = UAParser(ua)
      // @ts-ignore
      delete userAgent.ua
      dispatch(setPwaKey({ key: "core", value: {
        ...core,
        tings: {
          ...tings, 
          userAgent,
          complete: true,
          tingtime: Date.now(),
        }
      }}))
    } catch (e: any) {
      dispatch(notify(
        "TING602",
        "error", 
        `getUserAgent ${e.toString()}`
      ))
    }
  }
  