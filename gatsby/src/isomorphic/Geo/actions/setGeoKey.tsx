import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setGeoKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const geo = store.getState().geo
        dispatch(setPwaKey({key: "geo", value: { ...geo,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setGeoKey 500", "error", e.toString()))
    }
}
