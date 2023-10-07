import { 
  notify,
  setPwaKey,
  store,
} from "../../../../"

export const setAuthBack =
  (
    value: string,
  ): any =>
  async (dispatch: any) => {
    try {
      const {contact} = store.getState()
      dispatch(setPwaKey({ key: "authBack", value: {
        ...contact,
        "open": value,
      }}))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
