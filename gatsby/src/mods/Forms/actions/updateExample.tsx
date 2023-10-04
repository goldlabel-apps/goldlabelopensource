import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"
// import {validateExample} from "../"

export const updateExample = (
  key: string,
  value: any,
): any =>
  async (dispatch: any) => {
    try {
      const {listings} = store.getState()
      const {addListing} = listings
      dispatch(setPwaKey({ key: "listings", value: {
        ...listings,
        "addListing": {
          ...addListing,
          [key]: value,
        },
      }}))
      // dispatch(validateExample())
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}