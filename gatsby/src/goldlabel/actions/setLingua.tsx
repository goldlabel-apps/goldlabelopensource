import { 
  setPwaKey,
  // navigate,
} from "../../goldlabel"

export const setLingua =
  (value: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "locale", value}))
    } catch (error: any) {
      console.log("Action error: setLingua", error)
    }
}
