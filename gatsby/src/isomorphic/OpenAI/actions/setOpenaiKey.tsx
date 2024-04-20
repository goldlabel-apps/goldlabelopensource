import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"

export const setOpenaiKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const openai = store.getState().openai
        dispatch(setPwaKey({key: "openai", value: { ...openai,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify("setOpenaiKey 500", "error", e.toString()))
    }
}
