import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setFormsKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const {forms} = store.getState()
        dispatch(setPwaKey({key: "forms", value: { ...forms,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setFormsKey 500", "error", e.toString()))
    }
}
