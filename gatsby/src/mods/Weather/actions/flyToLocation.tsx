import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export const flyToLocation = (flyTo: any): any =>
  async (dispatch: any) => {
    try {
      const {weather} = store.getState()
      dispatch(setPwaKey({ key: "weather", value: {
        ...weather, 
        flyTo,
      }}))
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
