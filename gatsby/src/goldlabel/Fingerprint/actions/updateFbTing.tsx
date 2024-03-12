import { 
  notify,
  setPwaKey,
} from "../../../goldlabel"

export const updateFbTing = (
  fingerprint: any,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({key: "fingerprint", value: fingerprint}))
    } catch (e: any) {
      dispatch(notify("updateFbTing 500", "error", e.toString()))
    }
}
