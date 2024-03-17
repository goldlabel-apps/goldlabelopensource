import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setThemeKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const theme = store.getState().theme
        dispatch(setPwaKey({key: "theme", value: { ...theme,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setThemeKey 500", "error", e.toString()))
    }
}
