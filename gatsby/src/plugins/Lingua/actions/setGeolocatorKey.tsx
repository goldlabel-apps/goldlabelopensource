import { 
  notify,
  store,
  setPwaKey,
} from "../../../core"

export const setGeolocatorKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const {plugins}:any = store.getState()
        const {lingua} = plugins
        const newVal = {
          ...plugins,
          lingua: {
            ...lingua,
            [key]: value,
          }
        }
        dispatch(setPwaKey({key: "plugins", value: newVal}))
    } catch (e: any) {
      dispatch(notify(
        "Lingua 500",
        "error", 
        `setLinguaKey ${e.toString()}`
      ))
    }
}
