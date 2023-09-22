import { 
  setPwaKey,
} from "../../../"

export const toggleAccount =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "account", value}))
    } catch (error: any) {
      console.log("Action error: toggleAccount", error)
    }
}
