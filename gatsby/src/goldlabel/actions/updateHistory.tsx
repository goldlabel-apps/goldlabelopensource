// import { AppThunk } from "../store"
import { setPwaKey, notify } from "../../goldlabel"

export const updateHistory =
  (
    value: number | number[],
    // displayStr: string
  ): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "historyNum", value}))
      // dispatch(notify("success", `Time updated to ${displayStr}`))
    } catch (error: any) {
      console.log("Action error: updateHistory", error)
    }
}
