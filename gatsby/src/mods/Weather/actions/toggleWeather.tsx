import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const toggleWeather =
  (fullscreen: boolean): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        fullscreen,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
