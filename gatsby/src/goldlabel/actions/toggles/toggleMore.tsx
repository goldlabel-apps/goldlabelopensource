import { 
  setPwaKey,
} from "../../../"

export const toggleMore =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "more", value}))
    } catch (error: any) {
      console.log("Action error: toggleMore", error)
    }
}
