import { 
  notify,
  setPwaKey,
} from "../../../core"

export const resetTing = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "tings", value: null }))
    } catch (e: any) {
      dispatch(notify(
        "TING302",
        "error", 
        `resetTing ${e.toString()}`
      ))
    }
}
