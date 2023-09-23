import {
  notify,
} from "../../goldlabel"
export const resetRedux = (): any => async (dispatch: any) => {
    try {
        localStorage.removeItem("persist:goldlabel")
        setTimeout(() => {
          window.location.reload()
          // window.open("/", "_self")
        }, 200)
    } catch (error: any) {
      dispatch(notify("error", error))
    }
  }