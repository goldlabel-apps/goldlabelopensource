import { 
  setPwaKey,
} from "../../../goldlabel"

export const toggleGenericDialog =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "genericDialog", value}))
    } catch (error: any) {
      console.log("Action error: toggleGenericDialog", error)
    }
}
