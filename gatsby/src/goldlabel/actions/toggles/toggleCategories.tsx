import { 
  setPwaKey,
} from "../../../goldlabel"

export const toggleCategories =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "categories", value}))
    } catch (error: any) {
      console.log("Action error: toggleCategories", error)
    }
}
