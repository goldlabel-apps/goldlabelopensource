import {
  notify,
  store,
  setPwaKey,
} from "../../../core"

export const notifyCancel = (): any =>
  async (dispatch: any) => {
    try {
      const {core} = store.getState()
      dispatch(setPwaKey({ key: "core", value: {
        ...core,
        notifyer: null,
      }}))
    } catch (e: any) {
      dispatch(notify(
        "NTFY 101",
        "error", 
        `notifyCancel ${e.toString()}`
      ))
  }
}
