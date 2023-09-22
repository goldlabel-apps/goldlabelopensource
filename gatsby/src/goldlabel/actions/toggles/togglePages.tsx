import { 
  setPwaKey,
} from "../../../"

export const togglePages =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "pages", value}))
    } catch (error: any) {
      console.log("Action error: togglePages", error)
    }
}
