import { 
  setPwaKey,
} from "../../../../"

export const toggleLingua =
  (value: boolean): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "lingua", value}))
    } catch (error: any) {
      console.log("Action error: toggleLingua", error)
    }
}
