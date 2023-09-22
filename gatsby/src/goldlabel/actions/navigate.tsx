import { 
  setShare,
  notify,
} from "../../goldlabel"

export const navigate =
  (url: string, target: string): any =>
  async (dispatch: any) => {
    try {
      dispatch (setShare(false))
      setTimeout(() => {
        window.open(url, target)
      }, 250)
    } catch (error: any) {
      dispatch(notify("error", error))
    }
  }

