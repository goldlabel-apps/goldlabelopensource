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
        const {plugins} = store.getState()
        const {backoffice} = plugins
        const newVal = {
          ...plugins,
          backoffice: {
            ...backoffice,
            [key]: value,
          }
        }
        dispatch(setPwaKey({key: "plugins", value: newVal}))
    } catch (e: any) {
      dispatch(notify(
        "BACKOFFICE 500",
        "error", 
        `setBackofficeKey ${e.toString()}`
      ))
    }
}
