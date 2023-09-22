import { setShare } from "../../"

export const navigate =
  (url: string, target: string): any =>
  async (dispatch: any) => {
    try {
      dispatch (setShare(false))
      setTimeout(() => {
        window.open(url, target)
      }, 250)
    } catch (error: any) {
      console.log("Action error: navigate", error)
    }
  }

