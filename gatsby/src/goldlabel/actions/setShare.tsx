import { 
  setPwaKey,
} from "../../goldlabel"

export const setShare =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "sharing", value}))
    } catch (error: any) {
      console.log("Action error: setShare", error)
    }
}
