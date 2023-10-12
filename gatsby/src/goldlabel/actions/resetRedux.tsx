import {
  notify,
} from "../../goldlabel"
export const resetRedux = (): any => async (dispatch: any) => {
    try {
        localStorage.removeItem("persist:goldlabel")
        // setTimeout(() => {
        //   window.location.reload()
        // }, 500)
    } catch (e) {
      dispatch(notify("error", e.toString()))
    }
  }
