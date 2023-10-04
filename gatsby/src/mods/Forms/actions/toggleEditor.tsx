import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const toggleContact =
  (
    value: boolean,
  ): any =>
  async (dispatch: any) => {
    try {
      const {contact} = store.getState()
      dispatch(setPwaKey({ key: "contact", value: {
        ...contact,
        "open": value,
      }}))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}
