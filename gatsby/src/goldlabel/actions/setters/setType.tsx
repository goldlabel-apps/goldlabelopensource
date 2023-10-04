import { 
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const setType =
  (value: any): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "type", value}))
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}
