import { 
  notify,
  store,
  setPwaKey,
} from "../../../goldlabel"
import {validateAddListing} from "../"

export const updateAddListing = (
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
      dispatch(validateAddListing())
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}