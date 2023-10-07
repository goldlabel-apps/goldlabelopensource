// import { AppThunk } from "../store"
import { 
    setPwaKey, 
    notify, 
    store,
} from "../../goldlabel"

export const updateTing = (newTing: any): any =>
  async (dispatch: any) => {
    try {
      const sinceBoot = Date.now() - store.getState().bootTime
      const {tings} = store.getState()
      if (!tings) return null
      const {ting} = tings
      dispatch(setPwaKey({ key: "tings", value: {
        ...tings,
        ting: newTing,
      }}))
      dispatch(notify("success", `${Math.floor(sinceBoot/1000)} secs since your last ting`))
    } catch (error: any) {
      console.log("Action error: updateTing", error)
    }
}
