import { 
  notify,
  setPwaKey,
} from "../../../goldlabel"

export const resetTing = (): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "tings", value: null }))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
