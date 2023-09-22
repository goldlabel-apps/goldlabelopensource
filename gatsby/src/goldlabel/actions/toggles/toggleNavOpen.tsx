import { 
  setPwaKey,
} from "../../../"

export const toggleNavOpen =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "navOpen", value}))
    } catch (error: any) {
      console.log("Action error: toggleNavOpen", error)
    }
}
