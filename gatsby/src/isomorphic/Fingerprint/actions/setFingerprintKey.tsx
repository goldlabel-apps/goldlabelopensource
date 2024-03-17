import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setFingerprintKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const fingerprint = store.getState().fingerprint
        dispatch(setPwaKey({key: "fingerprint", value: { ...fingerprint,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setFingerprintKey 500", "error", e.toString()))
    }
}
