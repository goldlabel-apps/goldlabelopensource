import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const resetContact =
  (): any =>
  async (dispatch: any) => {
    try {
      const {contact} = store.getState()
      dispatch(setPwaKey({ key: "contact", value: {
        ...contact,
        message: "",
        valid: false,
        open: true,
        sending: false,
        sent: false,
      }}))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}