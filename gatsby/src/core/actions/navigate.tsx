import {
  notify,
  // store,
  // setPwaKey,
} from "../../core"

export const navigate = (
  url: string, 
  target: string
): any =>
  async (dispatch: any) => {
    try {
      setTimeout(() => {
        window.open(url, target)
      }, 180)
    } catch (e: any) {
      dispatch(notify(
        "NAV 101",
        "error", 
        `navigate ${e.toString()}`
      ))
    }
  }

