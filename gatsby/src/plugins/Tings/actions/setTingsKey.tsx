import { 
  notify,
  store,
  setPwaKey,
} from "../../../core"

export const setTingsKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const {plugins}:any = store.getState()
        const {tings} = plugins
        const newVal = {
          ...plugins,
          tings: {
            ...tings,
            [key]: value,
          }
        }
        dispatch(setPwaKey({key: "plugins", value: newVal}))
    } catch (e: any) {
      dispatch(notify(
        "Lingua 500",
        "error", 
        `setTingsKey ${e.toString()}`
      ))
    }
}
