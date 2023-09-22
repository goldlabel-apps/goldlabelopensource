import { 
  setPwaKey, 
  store,
} from "../../"

export const onUpdate =
  (data: any): any =>
  async (dispatch: any) => {
    try {
      const sinceBoot = Date.now() - store.getState().bootTime
      if (sinceBoot > 10000) { 
        dispatch(setPwaKey({ key: "bootTime", value: Date.now() }))
        // dispatch(notify("success", "New reading"))
      }
      // window.alert("onUpdate", )
      dispatch(setPwaKey({ key: "lastUpdated", value: Date.now() }))
      dispatch(setPwaKey({ key: "lilly", value: data }))
      // 
    } catch (error: any) {
      console.log("Action error: onUpdate", error)
    }
  }
