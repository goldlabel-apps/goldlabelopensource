import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const blinkMap = (): any =>
  async (dispatch: any) => {
    try {
      const {geolocator} = store.getState()
      dispatch(setPwaKey({ key: "geolocator", value: {
        ...geolocator,
        "blinking": true,
      }}))
      setTimeout(() => {
        dispatch(setPwaKey({ key: "weather", value: {
            ...geolocator, 
            blinking: false,
          }}))
    }, 1500)
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
