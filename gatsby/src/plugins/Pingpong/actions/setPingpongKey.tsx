import { 
  notify,
  store,
  setPwaKey,
} from "../../../core"

export const setPingpongKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
        const {pingpong} = store.getState()
        const newVal = {
          ...pingpong,
            [key]: value,
        }
        dispatch(setPwaKey({key: "pingpong", value: newVal}))
    } catch (e: any) {
      dispatch(notify(
        "Pingpong 500",
        "error", 
        `setPingpongKey ${e.toString()}`
      ))
    }
}
