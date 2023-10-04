import { 
  store,
  setPwaKey,
  notify,
} from "../../../goldlabel"

export type DisplayShape = {
  initted?: boolean
}

export const updateDisplay =
  (): any =>
  async (dispatch: any) => {
    try {
      // console.log("updateDisplay")
      let isBig = true
      let w = window.innerWidth
      if (w < 600) isBig = false
      let h = window.innerWidth
      const display = {
        w,
        h,
        isBig,
      }
      const {weather} = store.getState()
      const {initted} = weather
      if(!initted){
        dispatch(setPwaKey({ key: "weather", value: {
          ...weather, 
          display,
          initted: true,
        }}))
      }
    } catch (error: any) {
      dispatch(notify("error", `${error.toString()}`))
    }
}
