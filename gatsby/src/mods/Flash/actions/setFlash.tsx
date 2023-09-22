import { 
  setPwaKey,
} from "../../../goldlabel"

export const setFlash =
  (value: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "locale", value}))
    } catch (error: any) {
      console.log("Action error: setFlash", error)
    }
}
