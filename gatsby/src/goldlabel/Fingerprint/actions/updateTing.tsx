import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const updateTing = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
      const tings = store.getState().tings
      const {ting} = tings
      dispatch(setPwaKey({key: "tings", value: { 
        ...tings,
        ting: {
          ...ting,
          [key]: value,
        }
      }}))
    } catch (e: any) {
      dispatch(notify("updateTing 500", "error", e.toString()))
    }
}
