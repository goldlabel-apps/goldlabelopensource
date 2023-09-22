import { 
  setPwaKey,
} from "../../../"

export const toggleSettings =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "settings", value}))
    } catch (error: any) {
      console.log("Action error: toggleSettings", error)
    }
}
