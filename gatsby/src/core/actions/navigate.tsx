import {
  notify,
  store,
  setPwaKey,
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
      const {core} = store.getState()
      dispatch(setPwaKey({key: "core", value: {
        ...core,
        scrollDirection: "down",
      }}))
    } catch (e: any) {
      dispatch(notify(
        "NAV101",
        "error", 
        `navigate ${e.toString()}`
      ))
    }
  }

