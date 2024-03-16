import { 
  store,
  setPwaKey,
} from "../../../"

export const setWeathermapKey =
  (
    key: string,
    value: any): any =>
  async (dispatch: any) => {
    try {
      const {weathermap} = store.getState()
      dispatch(setPwaKey({ key: "weathermap", value: {
        ...weathermap, 
        [key]: value,
      }}))


    } catch (error: any) {
      console.log("Action error: setSpyKey", error)
    }
}
