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
        const {geolocator} = plugins
        const newVal = {
          ...plugins,
          geolocator: {
            ...geolocator,
            [key]: value,
          }
        }
        dispatch(setPwaKey({key: "plugins", value: newVal}))
    } catch (e: any) {
      dispatch(notify(
        "Geolocator 500",
        "error", 
        `setGeolocatorKey ${e.toString()}`
      ))
    }
}
