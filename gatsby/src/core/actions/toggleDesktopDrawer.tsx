// import { AppThunk } from "../state/store"
import {
  setPwaKey,
  store,
  notify,
} from "../../core"

export const toggleDesktopDrawer = (
    open: boolean,
): any => async (dispatch: any) => {
    try {
        const {core} = store.getState()
        dispatch(setPwaKey({ key: "core", value: {
            ...core,
            desktopDrawer: open,
        } })) 
    } catch (e: any) {
      dispatch(notify(
        "TGL101",
        "error", 
        `boot ${e.toString()}`
      ))
    }
  }
