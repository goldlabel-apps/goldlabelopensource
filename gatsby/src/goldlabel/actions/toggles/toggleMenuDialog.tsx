import { AppThunk } from "../../redux/store"
import { setPwaKey } from "../../../"

export const toggleMenuDialog =
  (menuDialog: boolean): any =>
  async (dispatch: any) => {
    try {
      // console.log("toggleMenuDialog", menuDialog)
      dispatch(setPwaKey({ key: "menuDialog", value: menuDialog
     }))
    } catch (error: any) {
      console.log("Action error: toggleMenuDialog", error)
    }
}
