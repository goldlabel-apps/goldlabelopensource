import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const switchActive =
  (active: "wind" | "temp" | "outlook" | null): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        active,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
