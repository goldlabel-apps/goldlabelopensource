import {
  notify,
} from "../../core"

export const navigate = (
  url: string, 
  target: string
): any =>
  async (dispatch: any) => {
    try {
      setTimeout(() => {
        window.open(url, target)
      }, 200)
    } catch (error: any) {
      dispatch(notify(
        "NAV101",
        "error", 
        `navigate ${e.toString()}`
      ))
    }
  }

