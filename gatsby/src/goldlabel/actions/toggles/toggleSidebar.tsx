import { 
  setPwaKey,
} from "../../../"

export const toggleSidebar =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "sidebar", value}))
    } catch (error: any) {
      console.log("Action error: toggleSidebar", error)
    }
}
