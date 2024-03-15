import { 
  notify,
  setPwaKey,
} from "../../../goldlabel"

export const updateFingerprint = (
  fingerprint: any,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({key: "fingerprint", value: fingerprint}))
    } catch (e: any) {
      dispatch(notify("updateFingerprint 500", "error", e.toString()))
    }
}
