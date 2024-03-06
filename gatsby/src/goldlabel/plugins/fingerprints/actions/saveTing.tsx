import axios from "axios"
import { 
  notify,
} from "../../../../goldlabel"

export const saveTing = (
  ting: any,
): any => async (dispatch: any) => {
  try {
    const updatedTing = {
      ...ting,
      updated: Date.now(),
    }
    console.log("updatedTing", updatedTing)
  } catch (e: any) {
    dispatch(notify("saveTing 500", "error", e.toString()))
  }
}
