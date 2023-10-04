import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const setWeatherKey =
  (
    key: string,
    value: any,
  ): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        [key]: value,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
