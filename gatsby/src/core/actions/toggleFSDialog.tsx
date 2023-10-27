import {
  setPwaKey,
  store,
  notify,
} from "../../core"

export const toggleFSDialog = (
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
        "toggleFSDialog",
        "error", 
        `boot ${e.toString()}`
      ))
    }
  }
