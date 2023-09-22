import { 
  setPwaKey,
} from "../../../"

export const toggleDarkmode =
(
  value: boolean,
): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "darkmode", value}))
      dispatch(setPwaKey({ key: "systemPref", value: true}))
    } catch (error: any) {
      console.log("Action error: toggleDarkmode", error)
    }
}
