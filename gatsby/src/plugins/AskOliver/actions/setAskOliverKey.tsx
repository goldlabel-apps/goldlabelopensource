import { 
  notify,
  store,
  setPwaKey,
} from "../../../core"
export const setAskOliverKey = (
    key: string,
    value: any,
): any =>
  async (dispatch: any) => {
    try {
      const {askoliver} = store.getState()
      dispatch(setPwaKey({key: "askoliver", value: {
        ...askoliver,
          [key]: value,
      }}))
    } catch (e: any) {
      dispatch(notify(
        "AskOliver 500",
        "error", 
        `setAskOliverKey ${e.toString()}`
      ))
    }
}
