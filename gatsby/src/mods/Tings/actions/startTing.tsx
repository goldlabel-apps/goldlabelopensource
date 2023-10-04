import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"
import {
  getHost,
} from "../"

export const startTing = (): any =>
  async (dispatch: any) => {
    try {
      const {tings} = store.getState()
      dispatch(setPwaKey({ key: "tings", value: {
        ...tings, 
        breadcrumb: [
          {
            time: Date.now(),
            pathname: window.location.pathname,
            host: window.location.host,
            title: document.title,

          }
        ],
      }}))
      dispatch(getHost())
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}