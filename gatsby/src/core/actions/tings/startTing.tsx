import { 
  notify,
  store,
  setPwaKey,
  getIPGeo,
} from "../../../core"

export const startTing = (): any => async (dispatch: any) => {
    try {
      const {core} = store.getState()
      const {tings} = core
      dispatch(setPwaKey({ key: "core", value: {
        ...core,
        tings: {
          ...tings, 
          host: window.location.host,
          slug: window.location.pathname,
          href: window.location.href,
          docTitle: document.title,
        }
      }}))
      dispatch(getIPGeo())
    } catch (e: any) {
      dispatch(notify(
        "TING202",
        "error", 
        `startTing ${e.toString()}`
      ))
    }
}