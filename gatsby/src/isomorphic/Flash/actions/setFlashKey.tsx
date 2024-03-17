import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setFlashKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const flash = store.getState().flash
        dispatch(setPwaKey({key: "flash", value: { ...flash,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setFlashKey 500", "error", e.toString()))
    }
}
