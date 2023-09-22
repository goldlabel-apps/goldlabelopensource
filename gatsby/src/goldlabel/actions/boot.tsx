import { AppThunk } from "../redux/store"
import { setPwaKey } from "../../"
import {
  store,
  // notify,
} from "../../"

export const boot = (
  isBig: boolean
): any => async (dispatch: any) => {
    try {
      const sinceBoot = Date.now() - store.getState().bootTime
      if (sinceBoot > 750) { 
        dispatch(setPwaKey({ key: "bootTime", value: Date.now() })) 

        const categories: boolean = store.getState().categories
        // console.log("Close menu if device is small & it is open")
        // console.log("isBig", isBig)
        // console.log("categories", categories)
        if (!isBig && categories){
          dispatch(setPwaKey({ key: "categories", value: false })) 
        }
      }
    } catch (error: any) {
      console.log("Action error: boot", error)
    }
  }
