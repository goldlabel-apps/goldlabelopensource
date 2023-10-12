import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const flyToLocation = (flyTo: any): any =>
  async (dispatch: any) => {
    try {
      const {geolocator} = store.getState()
      dispatch(setPwaKey({ key: "geolocator", value: {
        ...geolocator, 
        flyTo,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
