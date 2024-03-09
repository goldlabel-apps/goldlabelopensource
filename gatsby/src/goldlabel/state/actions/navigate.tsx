import {
  notify,
} from "../../../goldlabel"

export const navigate = (
  url: string, 
  target: string
): any =>
  async (dispatch: any) => {
    try {
      setTimeout(() => {
        window.open(url, target)
      }, 180)
    } catch (e: any) {
      dispatch(notify("navigate 500","error", e.toString()))
    }
}
