import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const setHourIndex = (hourIndex: number): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        hourIndex,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
