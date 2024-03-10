import { 
  notify,
  store,
  setPwaKey,
} from "../../../../goldlabel"

export const updateFbTing = (
    update: any,
): any =>
  async (dispatch: any) => {
    try {
      const tings = store.getState().tings
      dispatch(setPwaKey({key: "tings", value: { 
        ...tings,
        fbTing: update,
      }}))
    } catch (e: any) {
      dispatch(notify("updateFbTing 500", "error", e.toString()))
    }
}
