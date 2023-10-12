import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const toggleBigMap = (open: boolean): any =>
  async (dispatch: any) => {
    try {
      // console.log("toggleBigMap", open)
      const {geolocator} = store.getState()
      dispatch(setPwaKey({ key: "geolocator", value: {
        ...geolocator,
        "bigMapOpen": open,
      }}))
    } catch (e: any) {
      dispatch(notify("error", `toggleBigMap ${e.toString()}`))
    }
}
