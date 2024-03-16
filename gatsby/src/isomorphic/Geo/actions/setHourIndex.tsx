import { 
  store,
  setPwaKey,
} from "../../../"

export const setHourIndex = (hourIndex: number): any =>
  async (dispatch: any) => {
    try {
      const {weathermap} = store.getState()
      dispatch(setPwaKey({ key: "weathermap", value: {
        ...weathermap, 
        hourIndex,
      }}))
    } catch (error: any) {
      console.log("Action error: setHourIndex", error)
    }
}
