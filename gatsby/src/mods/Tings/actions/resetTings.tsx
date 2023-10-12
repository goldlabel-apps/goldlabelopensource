import { 
  notify,
  setPwaKey,
} from "../../../goldlabel"

export const resetTings = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "tings", value: null }))
    } catch (e: any) {
      dispatch(notify("error", `resetTings ${e.toString()}`))
    }
}
