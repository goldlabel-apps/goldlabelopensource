import { 
  notify,
} from "../../../../goldlabel"

export const resetTillNextTing = (
    tillNextTing: number
): any =>
  async (dispatch: any) => {
    try {
      console.log("resetTillNextTing", tillNextTing)
    } catch (e: any) {
      dispatch(notify("resetTillNextTing 500", "error", e.toString()))
    }
}
