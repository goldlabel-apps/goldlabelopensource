import { 
  notify,
  store,
  setPwaKey,
} from "../../../core"

export const setBackofficeKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
      const {backoffice} = store.getState()
      dispatch(setPwaKey({key: "backoffice", value: {
        ...backoffice,
          [key]: value,
      }}))
    } catch (e: any) {
      dispatch(notify(
        "Backoffice 500",
        "error", 
        `setBackofficeKey ${e.toString()}`
      ))
    }
}
