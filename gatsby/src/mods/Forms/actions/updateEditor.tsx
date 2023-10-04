import { 
  notify,
  setPwaKey,
  store,
} from "../../../goldlabel"

export const updateContact =
  (
    key: string,
    value: any,
  ): any =>
  async (dispatch: any) => {
    try {
      const {contact} = store.getState()
      if (key === "message"){
        if (value.length > 1){
          dispatch(setPwaKey({ key: "contact", value: {
            ...contact,
            "valid": true,
          }}))
        } else {
          dispatch(setPwaKey({ key: "contact", value: {
            ...contact,
            "valid": false,
          }}))
        }
      }
      dispatch(setPwaKey({ key: "contact", value: {
        ...contact, 
        [key]: value,
      }}))
    } catch (error: any) {
      dispatch(notify("warning", error))
    }
}