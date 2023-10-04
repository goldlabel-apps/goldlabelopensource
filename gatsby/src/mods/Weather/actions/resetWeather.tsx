import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"
import {weatherState} from "../../Weather"

export const resetWeather = (): any =>
  async (dispatch: any) => {
    const fullscreen = store.getState().weather.fullscreen
    const resetState = {
      ...weatherState,
      fullscreen,
    }
    try {
      dispatch(setPwaKey({ key: "weather", value: resetState}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
