import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const selectLocation =
  (
    value: any,
  ): any =>
  async (dispatch: any) => {
    try {
      const {geo} = store.getState()
      dispatch(setPwaKey({ key: "geo", value: {
        ...geo,
        "location": value,
      }}))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
