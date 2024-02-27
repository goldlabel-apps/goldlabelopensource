import { 
  notify,
  store,
  setPwaKey,
} from "../../../../goldlabel"

export const setTingsKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const tings = store.getState().tings
        dispatch(setPwaKey({key: "tings", value: { ...tings,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setTingsKey 500", "error", e.toString()))
    }
}
