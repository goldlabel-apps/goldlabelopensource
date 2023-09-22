import { 
  notify,
  setPwaKey,
  store,
} from "../../../../"

export const cancelAddListing = (): any =>
  async (dispatch: any) => {
    try {
      // dispatch(navigate("/", "_self"))
      console.log("cancelAddListing.")
      const {listings} = store.getState()
      dispatch(setPwaKey({ key: "listings", value: {
        ...listings,
        "addListing": null,
      }}))
      const el = document.getElementById("add_listing_name")
      if(el) el.focus()
    } catch (error: any) {
      dispatch(notify("error", error))
    }
}
