import { 
  setPwaKey,
} from "../../goldlabel"

export const setFrontmatter =
  (value: any): any =>
  async (dispatch: any) => {
    try {
      dispatch(setPwaKey({ key: "frontmatter", value}))
    } catch (error: any) {
      console.log("Action error: setFrontmatter", error)
    }
}
