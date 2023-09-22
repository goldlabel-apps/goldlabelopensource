// import { AppThunk } from "../redux/store"
import { setPwaKey } from "../../goldlabel"
import {
  store,
  notify,
} from "../../goldlabel"

export const boot = (
  isBig: boolean
): any => async (dispatch: any) => {
    try {
      const sinceBoot = Date.now() - store.getState().bootTime
      if (sinceBoot > 750) { 
        dispatch(setPwaKey({ key: "bootTime", value: Date.now() })) 
        const categories: boolean = store.getState().categories
        if (!isBig && categories){
          dispatch(setPwaKey({ key: "categories", value: false })) 
        }
      }
    } catch (error: any) {
      dispatch(notify("error", error))
    }
  }
