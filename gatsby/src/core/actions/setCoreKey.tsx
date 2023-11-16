import { 
  notify,
  store,
  setPwaKey,
} from "../../core"

export const setCoreKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const {core} = store.getState()
        dispatch(setPwaKey({key: "core", value: {
          ...core,
          [key]: value,
        }}))
    } catch (e: any) {
      dispatch(notify(
        "BACKOFFICE 500",
        "error", 
        `setCoreKey ${e.toString()}`
      ))
    }
}
