import { 
  setPwaKey,
} from "../../../"

export const toggleAddListing =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "addListing", value}))
    } catch (error: any) {
      console.log("Action error: toggleAddListing", error)
    }
}
